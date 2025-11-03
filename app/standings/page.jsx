import { Card } from 'components/card';

export const metadata = {
    title: 'Lig Puan Durumu'
};

const standings = [
    { position: 1, team: 'Galatasaray', played: 34, won: 28, drawn: 4, lost: 2, goalsFor: 87, goalsAgainst: 25, goalDifference: 62, points: 88 },
    { position: 2, team: 'Fenerbahçe', played: 34, won: 26, drawn: 5, lost: 3, goalsFor: 82, goalsAgainst: 28, goalDifference: 54, points: 83 },
    { position: 3, team: 'Beşiktaş', played: 34, won: 23, drawn: 6, lost: 5, goalsFor: 74, goalsAgainst: 32, goalDifference: 42, points: 75 },
    { position: 4, team: 'Trabzonspor', played: 34, won: 21, drawn: 7, lost: 6, goalsFor: 68, goalsAgainst: 35, goalDifference: 33, points: 70 },
    { position: 5, team: 'Başakşehir', played: 34, won: 19, drawn: 8, lost: 7, goalsFor: 61, goalsAgainst: 38, goalDifference: 23, points: 65 },
    { position: 6, team: 'Alanyaspor', played: 34, won: 17, drawn: 9, lost: 8, goalsFor: 56, goalsAgainst: 41, goalDifference: 15, points: 60 },
    { position: 7, team: 'Konyaspor', played: 34, won: 16, drawn: 10, lost: 8, goalsFor: 52, goalsAgainst: 39, goalDifference: 13, points: 58 },
    { position: 8, team: 'Kasımpaşa', played: 34, won: 15, drawn: 11, lost: 8, goalsFor: 49, goalsAgainst: 38, goalDifference: 11, points: 56 },
    { position: 9, team: 'Sivasspor', played: 34, won: 14, drawn: 12, lost: 8, goalsFor: 47, goalsAgainst: 39, goalDifference: 8, points: 54 },
    { position: 10, team: 'Gaziantep FK', played: 34, won: 13, drawn: 11, lost: 10, goalsFor: 45, goalsAgainst: 42, goalDifference: 3, points: 50 },
    { position: 11, team: 'Antalyaspor', played: 34, won: 12, drawn: 10, lost: 12, goalsFor: 43, goalsAgainst: 44, goalDifference: -1, points: 46 },
    { position: 12, team: 'Kayserispor', played: 34, won: 11, drawn: 11, lost: 12, goalsFor: 41, goalsAgainst: 45, goalDifference: -4, points: 44 },
    { position: 13, team: 'Fatih Karagümrük', played: 34, won: 10, drawn: 12, lost: 12, goalsFor: 39, goalsAgainst: 46, goalDifference: -7, points: 42 },
    { position: 14, team: 'Adana Demirspor', played: 34, won: 9, drawn: 13, lost: 12, goalsFor: 37, goalsAgainst: 47, goalDifference: -10, points: 40 },
    { position: 15, team: 'Hatayspor', played: 34, won: 8, drawn: 12, lost: 14, goalsFor: 35, goalsAgainst: 50, goalDifference: -15, points: 36 },
    { position: 16, team: 'Giresunspor', played: 34, won: 7, drawn: 11, lost: 16, goalsFor: 32, goalsAgainst: 54, goalDifference: -22, points: 32 },
    { position: 17, team: 'İstanbulspor', played: 34, won: 6, drawn: 10, lost: 18, goalsFor: 28, goalsAgainst: 58, goalDifference: -30, points: 28 },
    { position: 18, team: 'Ankaragücü', played: 34, won: 5, drawn: 9, lost: 20, goalsFor: 24, goalsAgainst: 62, goalDifference: -38, points: 24 },
];

function getRowClassName(position) {
    if (position <= 3) {
        return 'bg-blue-500/20 border-l-4 border-blue-400';
    }
    if (position === 4) {
        return 'bg-green-500/20 border-l-4 border-green-400';
    }
    if (position >= 16) {
        return 'bg-red-500/20 border-l-4 border-red-400';
    }
    return '';
}

export default function StandingsPage() {
    return (
        <div className="flex flex-col gap-8 py-8">
            <section>
                <h1 className="mb-6 text-3xl font-bold">Süper Lig Puan Durumu</h1>
                
                <div className="mb-6 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded"></div>
                        <span>Şampiyonlar Ligi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded"></div>
                        <span>Avrupa Ligi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded"></div>
                        <span>Küme Düşme</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-blue-950/50 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-blue-900/50 text-left">
                                <th className="p-3 font-semibold">#</th>
                                <th className="p-3 font-semibold">Takım</th>
                                <th className="p-3 font-semibold text-center">O</th>
                                <th className="p-3 font-semibold text-center">G</th>
                                <th className="p-3 font-semibold text-center">B</th>
                                <th className="p-3 font-semibold text-center">M</th>
                                <th className="p-3 font-semibold text-center">A</th>
                                <th className="p-3 font-semibold text-center">Y</th>
                                <th className="p-3 font-semibold text-center">AV</th>
                                <th className="p-3 font-semibold text-center font-bold">P</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((team) => (
                                <tr 
                                    key={team.position}
                                    className={`border-t border-blue-800/50 hover:bg-blue-800/30 transition-colors ${getRowClassName(team.position)}`}
                                >
                                    <td className="p-3 font-medium">{team.position}</td>
                                    <td className="p-3 font-medium">{team.team}</td>
                                    <td className="p-3 text-center">{team.played}</td>
                                    <td className="p-3 text-center">{team.won}</td>
                                    <td className="p-3 text-center">{team.drawn}</td>
                                    <td className="p-3 text-center">{team.lost}</td>
                                    <td className="p-3 text-center">{team.goalsFor}</td>
                                    <td className="p-3 text-center">{team.goalsAgainst}</td>
                                    <td className="p-3 text-center font-medium">
                                        {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                                    </td>
                                    <td className="p-3 text-center font-bold text-lg">{team.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 text-sm text-gray-300">
                    <p className="mb-2"><strong>Açıklama:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>O: Oynanan, G: Galibiyet, B: Beraberlik, M: Mağlubiyet</li>
                        <li>A: Atılan Gol, Y: Yenilen Gol, AV: Averaj, P: Puan</li>
                        <li>İlk 3 takım Şampiyonlar Ligi'ne katılır</li>
                        <li>4. takım Avrupa Ligi'ne katılır</li>
                        <li>Son 3 takım küme düşer</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
