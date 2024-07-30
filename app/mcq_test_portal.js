const McqTestPortal = () => {
    return (
        <div className="container">
            <h2 className="mcq-tp">MCQ Test Portal</h2>
            <div className="parent-container">
                <div className="mcq-test-portal">
                    <div >
                        <h3 className="instructions-haeding">Instructions</h3>
                    </div>
                    <p className="paragraph-read">Please read the instructions carefully before you begin:</p>
                    <div className="instruction">
                        <ul>
                            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                            <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                            <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                            <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                            <li>Review: After submission, you may review your answers and scores.</li>
                        </ul>
                        <p>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
                        <p>Click 'Let's Start' to begin the test.</p>
                        <p className="good-luck"> Good luck!</p>
                    </div>
                    <div className="line"></div>
                    <button className="btn">Lets Start</button>
                </div>
            </div>
        </div>
    );
};

export default McqTestPortal;
