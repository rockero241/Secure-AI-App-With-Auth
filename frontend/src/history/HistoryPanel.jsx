import "react"
import {useState, useEffect} from "react"
import {MCQChallenge} from "../challenge/MCQChallenge.jsx"

/**
 * Renders a panel displaying the user's challenge history.
 *
 * This component fetches and displays a list of completed challenges.
 * It handles loading states, error handling, and renders either a loading indicator,
 * an error message, or a list of MCQ challenges from the user's history.
 *
 * @returns {JSX.Element} A panel showing the user's challenge history
 */
export function HistoryPanel() {
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchHistory()
    }, [])

    const fetchHistory = async () => {
        setIsLoading(false)
    }

    if (isLoading) {
        return <div className="loading">Loading History...</div>
    }

    if (error) {
        return <div className="error">Error: {error.message}
            <p>{error}</p>
            <button onClick={fetchHistory}>Retry</button>
        </div>
    }

    return <div className="history-panel">
        <h2>History</h2>
        {history.length === 0 ? <p>No challenge history</p> :
            <div className="history-list">
                {history.map((challenge) => {
                    return <MCQChallenge
                            challenge
                            key={challenge.id}
                            showhowExplanation
                        />
                })}
            </div>}

        </div>
}