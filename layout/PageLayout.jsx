export default function PageLayout({children}) {
  return (
    <div 
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '60px 20px 0',
      }}
    >
      {children}
    </div>
  )
}
