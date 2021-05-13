import React from 'react'

export default function StatCard() {
    return (
        <div className="stat-card">
            <table>
                <tr>
                    <td>
                        <span>$89,914</span> of $100,000 backed 
                    </td>
                    <td>
                        <span>5,007 </span> total backers 
                    </td>
                    <td>
                        <span>56</span> days left 
                    </td>
                </tr>
            </table>
            <progress value="80" max="100"></progress>
        </div>
    )
}
