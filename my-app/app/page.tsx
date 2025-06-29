import Hello from "./components/hello";

export default function Home() {
  console.log("what i am doing here? -- server/client")
  return (<>
   <h1 className="text-3xl">Welcome to Next.js</h1>
    <Hello />
   </>
  );
}
