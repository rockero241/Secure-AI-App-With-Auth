import "react"
import {useState} from "react"

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

    return <></>
}