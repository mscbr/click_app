import React from 'react';
import styled from 'styled-components';

// props:
/// paragraph
/// citee

const StyledBlockQuote = styled.blockquote`
    width: 100%;
    padding: 1em 2em 1em 2em;
`;

interface Props {
    paragraph?: string;
    cite?: string;
}

const QuoteBlock: React.FC<Props> = props => {
    const { paragraph, cite } = props;
    return (
        <StyledBlockQuote>
            <p>{paragraph}</p>
            <cite>
                {`~ `}
                {cite}
            </cite>
        </StyledBlockQuote>
    );
};

export default QuoteBlock;
