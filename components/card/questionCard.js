import Head from 'next/head'
import { useTranslation } from 'react-i18next';

function QuestionCard({ question, index }) {
    const { i18n } = useTranslation();

    return (
        <div className="accordion-item bg-bgblack text-white">
            <h2 className="accordion-header text-white" id={`flush-heading${index}`}>
                <button className="accordion-button collapsed text-white text-xl font-medium" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                    {question.title.uz}
                </button>
            </h2>
            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-placeholderColor text-base" dangerouslySetInnerHTML={{ __html: question.body[i18n.language] }}></div>
            </div>
        </div>
    );
}

export default QuestionCard;