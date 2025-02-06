export default function Statistics({ selectedMonth, data}) {
  return (
    <div style={{ 
        height: '100vh', 
        width: '100%', 
         }}>
      <h1>Statistics - {selectedMonth}</h1>
      <div style={{ 
        backgroundColor: 'lightyellow',
        color: 'black',
        padding: '20px',
        borderRadius: '8px',
        margin: '20px',
        width: '500px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '20px', margin: '10px 0' }}>
          <p>Total sale: <strong>{data.totalSale}</strong></p>
          <p>Total sold items: <strong>{data.totalSoldItem}</strong></p>
          <p>Total not sold items: <strong>{data.totalNotSoldItem}</strong></p>
        </div>
      </div>
    </div>
  );
}
