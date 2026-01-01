const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default PageLayout