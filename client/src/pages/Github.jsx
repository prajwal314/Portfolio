/**
 * Github — activity section ported from sleek-portfolio.
 * Fetches last-year contributions from github-contributions-api, renders a
 * lightweight heatmap grid (no extra npm dependency).
 */
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { GITHUB_CONFIG } from '../utils/constants';
import Container from '../components/Container';

const levelColors = {
  dark: ['rgb(22,27,34)', 'rgb(14,68,41)', 'rgb(0,109,50)', 'rgb(38,166,65)', 'rgb(57,211,83)'],
  light: ['rgb(235,237,240)', 'rgb(155,233,168)', 'rgb(64,196,99)', 'rgb(48,161,78)', 'rgb(33,110,57)'],
};

const Github = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${GITHUB_CONFIG.apiUrl}/${GITHUB_CONFIG.username}.json`);
        const data = await res.json();
        const flat = (data?.contributions || []).flat();
        const map = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
        const items = flat
          .filter((c) => c && c.date && 'contributionCount' in c)
          .map((c) => ({
            date: String(c.date),
            count: Number(c.contributionCount || 0),
            level: map[c.contributionLevel] || 0,
          }));
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const filtered = items.filter((d) => new Date(d.date) >= oneYearAgo);
        setTotal(filtered.reduce((s, d) => s + d.count, 0));
        // chunk into weeks of 7
        const chunks = [];
        for (let i = 0; i < filtered.length; i += 7) chunks.push(filtered.slice(i, i + 7));
        setWeeks(chunks);
        if (!filtered.length) setError(true);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const colors = dark ? levelColors.dark : levelColors.light;

  return (
    <Container className="mt-20">
      <section id="github">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{GITHUB_CONFIG.title}</h2>
            <p className="text-muted-foreground text-sm text-secondary">
              <b>{GITHUB_CONFIG.username}</b>&apos;s {GITHUB_CONFIG.subtitle}
            </p>
            {!loading && !error && total > 0 && (
              <p className="mt-1 text-sm font-medium">
                Total: <span className="font-black">{total.toLocaleString()}</span> contributions
              </p>
            )}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
                <p className="text-sm text-secondary">Fetching GitHub activity…</p>
              </div>
            </div>
          ) : error || weeks.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed p-8 text-center text-secondary">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                <FaGithub size={32} />
              </div>
              <p className="mb-2 font-medium">Unable to load GitHub contributions</p>
              <a
                href={`https://github.com/${GITHUB_CONFIG.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm ${
                  dark ? 'border-white/20' : 'border-black/20'
                }`}
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div
                className={`relative rounded-lg border border-dashed p-6 backdrop-blur-sm ${
                  dark ? 'border-white/10 bg-white/[0.02]' : 'border-black/20 bg-black/[0.02]'
                }`}
              >
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-1 min-w-max">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-1">
                        {week.map((day) => (
                          <span
                            key={day.date}
                            title={`${day.date}: ${day.count}`}
                            className="block size-3 rounded-[3px]"
                            style={{ backgroundColor: colors[Math.min(day.level, 4)] }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Github;
