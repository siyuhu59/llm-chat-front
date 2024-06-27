import * as S from "../../styles/settings.style";


const dummytext = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisl aliquet dui porttitor ultrices. Integer pellentesque ornare sodales. Donec erat quam, suscipit non nisi eget, rutrum ullamcorper felis. Mauris at dui nec sem vestibulum vehicula euismod sed purus. In at tempus eros. Quisque fermentum, enim quis egestas commodo, nunc tellus ornare velit, et eleifend enim erat sit amet nisi. Nullam vel justo felis.
    Proin lobortis vulputate libero, a sollicitudin libero congue vel. Ut dapibus nulla ut dolor mattis blandit. Nulla quis tempor dolor. Cras sollicitudin augue eget est pulvinar, sed fermentum erat fringilla. Vestibulum semper elit in quam feugiat scelerisque. Etiam at erat at ipsum pharetra scelerisque nec at ipsum. Sed consectetur orci at nisl scelerisque suscipit. Mauris ultrices consequat fringilla. Ut finibus purus nec venenatis aliquet.
`

const rkdwh = [`consectetur adipiscing elit.`, 'a sollicitudin libero congue vel.']

// highlightText 함수 정의
function highlightText(text, highlights) {
    highlights.forEach(highlight => {
        const regex = new RegExp(`(${highlight})`, 'gi');
        text = text.replace(regex, `<span style='background-color:#fefd48;'>$1</span>`);
    });
    return text;
}


const Resource = () => {
    const highlightedText = highlightText(dummytext, rkdwh);
    return (
        <S.SettingsDetailContainer style={{maxHeight: '30vh'}}>
            <h3>출처</h3>
            <S.LongTextWrapper dangerouslySetInnerHTML={{ __html: highlightedText }} />
            <S.SettingsButton>
                <button style={{marginRight:'.5rem'}}>이전</button>
                <button>다음</button>
            </S.SettingsButton>
            
        </S.SettingsDetailContainer>
    )
}

export default Resource;