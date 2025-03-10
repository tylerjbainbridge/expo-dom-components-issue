'use dom';

// import './styles.css';

export default function DOMComponent({
  name,
  dom,
}: {
  name: string;
  dom?: import('expo/dom').DOMProps;
}) {
  console.log('hello from web component');
  console.log('dom', dom);

  return (
    <div style={{ backgroundColor: 'green', flex: 1 }}>
      <p style={{ color: 'white' }}>Hello from the web view</p>
    </div>
  );

  return (
    <div
      style={{ backgroundColor: 'orange', width: 1000, height: 1000, flex: 1 }}
    >
      <h1 style={{ color: 'white' }}>Hello, {name}</h1>
    </div>
  );
}
