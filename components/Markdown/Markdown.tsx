import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import Link from '../Link'

export const Markdown: FC = ({ children }) =>
  !children ? null : (
    <ReactMarkdown
      components={{
        a({ className, children, href, ...props }) {
          return (
            <Link to={href || ''} className={className} {...props}>
              {children}
            </Link>
          )
        },
      }}
    >
      {children.toString()}
    </ReactMarkdown>
  )
