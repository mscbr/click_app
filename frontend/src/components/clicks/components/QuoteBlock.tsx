import React from 'react';
import styled from 'styled-components';

const StyledBlockQuote = styled.blockquote`
    padding: 1em;
    font-style: italic;
    p {
        display: block;
        text-align: left;
    }
    cite {
        display: block;
        text-align: right;
    }
`;

interface Props {
    paragraph?: string;
    cite?: string;
}

const QuoteBlock: React.FC<Props> = props => {
    const { paragraph, cite } = props;
    return (
        <StyledBlockQuote>
            <p>
                {'"'}
                {paragraph}
                {'"'}
            </p>
            <cite>
                {`~ `}
                {cite}
            </cite>
        </StyledBlockQuote>
    );
};

export default QuoteBlock;
