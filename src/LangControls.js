import React from 'react';
import LanguageContext from './LanguageContext';



const LangControls = props => {
    return (
        <LanguageContext.Consumer>
            {(value)=>{
                return(
        <>
        <button disabled={value.lang === 'en-GB'}
                onClick={()=>props.onSetLang('en-GB')}>
        British{' '}
        <span role='img' arial-label="en-GB">GB</span>
        </button>
        <button disabled={value.lang === 'en-US'}
                onClick={()=>props.onSetLang('en-US')}>
        American{' '}
        <span role='img' arial-label="en-US">US</span>
        </button>
        <button disable={value.lang === 'ko'}
                onClick={()=>props.onSetLang('ko')}>
        Korean{' '}
        <span role='img' arial-label='ko'>KR</span>
        </button>
    </>
    )
    }}
    </LanguageContext.Consumer>
    );
};

export default LangControls;