import React from 'react';
import { connect } from "react-redux";

function StatCard(props) {
    const { moneyRaised, backers } = props;
    return (
        <section className="stat-card">
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
        </section>
    )
}

const mapStateToProps = (state) => ({
    moneyRaised: state.moneyRaised,
    backers: state.backers
})

export default connect(mapStateToProps)(StatCard);