import React from 'react'

export default function StatCard({moneyRaised, backers}) {
    return (
        <div className="stat-card">
            <table>
                <tr>
                    <td>
                        <span>${moneyRaised.toLocaleString("en-US")}</span> of $100,000 backed 
                    </td>
                    <td>
                        <span>{backers.toLocaleString("en-US")} </span> total backers 
                    </td>
                    <td>
                        <span>56</span> days left 
                    </td>
                </tr>
            </table>
            <progress value={Math.floor(moneyRaised / 1000)} max="100"></progress>
        </div>
    )
}
