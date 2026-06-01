function Button({ children }) {
  return (
    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
      {children}
    </button>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TailWindDemo() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Button>Click Me</Button>
      <Button>Submit</Button>
      <Card
        title="My Card"
        description="This is a tailwind styled card"
      />
      <Card
        title="Second Card"
        description="Another tailwind styled card"
      />
    </div>
  );
}

export default TailWindDemo;