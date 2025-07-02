import "react"
import {useState} from "react"

/**
 * Renders a multiple-choice question (MCQ) challenge component
 *
 * @param {Object} props - The component props
 * @param {Object} props.challenge - The challenge object containing question details
 * @param {boolean} [props.showExplanation=false] - Whether to show the explanation by default
 * @returns {JSX.Element} A rendered MCQ challenge with selectable options
 */
/**
 * Renders a multiple-choice question (MCQ) challenge component
 *
 * @param {Object} props - The component props
 * @param {Object} props.challenge - The challenge object containing question details
 * @param {boolean} [props.showExplanation=false] - Whether to show the explanation by default
 * @returns {JSX.Element} A rendered MCQ challenge with selectable options
 */
export function MCQChallenge({challenge, showExplanation = false}) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [shouldShowExplanation, setShouldShowExplanation] = useState(showExplanation)

    // if sting convert to json, otherwise take existing options
    const options = typeof challenge.options === "string"
        ? JSON.parse(challenge.options)
        : challenge.options

    // if option is selected, grab index of answer and show explanation
    const handleOptionSelect = (index) => {
        if (selectedOption !== null) return;
        setSelectedOption(index)
        setShouldShowExplanation(true)
    }

    // returns correct, incorrect or option depending on whether they chose the correct answer
    const getOptionClass = (index) => {
        if (selectedOption === null) return "option"

        if (index === challenge.correct_answer_id) {
            return "option correct"
        }
        if (salectedOption === index && index !== challenge.correct_answer_id) {
            return "option incorrect"
        }
        return "option"
    }

    // multiple choice challenge component
    return <div className={"challenge-display"}>
        <p><strong>Difficulty</strong>: {challenge.dificulty}</p>
        <p className="challenge-title">{challenge.title}</p>
        <div className="options">
            {options.map((option, index) => (
                <div
                    className={getOptionClass(index)}
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                >
                    {option}
                </div>
            ))}
        </div>
        {shouldShowExplanationShowExplanation && selectedOption !== null && (
            <div className="explanation">
                <h4>Explanation</h4>
                <p>{challenge.explanation}</p>
            </div>
        )}
    </div>
}