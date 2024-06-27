import React, { useEffect, useState } from "react";

import * as S from "../../styles/settings.style";

// highlightText 함수 정의
function highlightText(text, highlights) {
    highlights.forEach(highlight => {
        const regex = new RegExp(`(${highlight})`, 'gi');
        text = text.replace(regex, `<span style='background-color:#fefd48;'>$1</span>`);
    });
    return text;
}


const Resource = ({ resource }) => {
    const [page, setPage] = useState(0);
    const controllPage = (state) => {
        if (state === 'prev' && page > 0) {
            setPage(page - 1);
        }
        if (state === 'next' && page < resource.paragraph.length - 1) {
            setPage(page + 1);
        }
    }

    const [highlightedText, setHighlightedText] = useState('');
    useEffect(() => {
        if (resource.paragraph.length === 0) return;
        console.log(resource.paragraph[page].context, resource.paragraph[page].source)
        setHighlightedText(highlightText(resource.paragraph[page].context, resource.paragraph[page].source));
    }, [resource, page])

    
    return (
        <S.SettingsDetailContainer style={{maxHeight: '30vh'}}>
            <h3>출처</h3>
            <S.LongTextWrapper dangerouslySetInnerHTML={{ __html: highlightedText }} />
            <S.SettingsButton>
                <button onClick={()=>{controllPage('prev')}} style={{marginRight:'.5rem'}}>이전</button>
                <button onClick={()=>{controllPage('next')}}>다음</button>
            </S.SettingsButton>
            
        </S.SettingsDetailContainer>
    )
}

export default Resource;