import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default ({ children, className }) => {
    const language = className ? className.replace(/language-/, '') : null

    if(!language) {
        return (
            <div className='post-code'>{children}</div>
        )
    }

    return (
    <Highlight {...defaultProps} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{style }}>
            {tokens.slice(0, tokens.length - 1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
                ))}
            </div>
            ))}
        </pre>
        )}
    </Highlight>
    )
}