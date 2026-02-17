import Card from "../components/Card";

function Home() {
  return (
    <div className="card-container">
      <Card title="UI Design" description="Figma → React." />
      <Card title="React Basics" description="Components & Props." />
      <Card title="Flexbox" description="Responsive layouts." />
    </div>
  );
}

export default Home;
