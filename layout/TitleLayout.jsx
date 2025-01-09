export default function TitleLayout({children}) {
  return (
    <div 
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '60px 220px 0',
      }}
    >
      {children}
    </div>
  )
}
