import { useSelector, useDispatch } from "react-redux";
import { selectActiveQuestion } from "./quizSlice";
import { increment, decrement, reset } from "./quizSlice";
import { questionsLength } from "./quizSlice";
import { countQuestion } from "./quizSlice";

const Quiz:React.FC = () => {

    const count = useSelector(countQuestion)
    const showQuiz = useSelector(selectActiveQuestion)
    const quizLength = useSelector(questionsLength)
    const dispatch = useDispatch()

    const incrementFnc = () => {
        if ( count >= quizLength.length - 1 ) {
            dispatch(reset())
        } else {
            dispatch(increment())
        }
    }
    const decrementFnc = () => {
        if ( count <= 0 ) {
            dispatch(reset())
        } else {
            dispatch(decrement())
        }
    }

    return(
        <div>
           Questions 
           <p>{count + 1} question</p>
           <p style={{color: showQuiz.color}}><b>{showQuiz.content}</b></p>
           <button onClick={incrementFnc}>Next</button>
           <button onClick={decrementFnc}>Back</button>
        </div>
    )
}

export default Quiz;