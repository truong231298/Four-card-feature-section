import iconCalculator from "/images/icon-calculator.svg";
import iconkarma from "/images/icon-karma.svg";
import iconsupervisor from "/images/icon-supervisor.svg";
import iconteam from "/images/icon-team-builder.svg";

const Box = ({ name, content, image, border }) => (
  <div className="bg-white drop-shadow-md p-4 flex flex-col gap-2 sm:w-72 w-80 h-60" style={{ borderTop: `4px solid ${border.toLowerCase()}` }}>
    <h1 className="text-VeryDarkBlue font-semibold">{name}</h1>
    <p>{content}</p>
    <span className="mt-2">
      <img src={image} alt="" className="w-12 h-12 mt-8 float-right" />
    </span>
  </div>
);

export default function App() {
  const boxs = [
    { name: "Supervisor", content: "Monitors activity to identify project roadblocks", image: iconsupervisor, border: "Cyan" },
    { name: "Team Builder", content: "Scans our talent network to create the optimal team for your project", image: iconteam, border: "Red" },
    { name: "Karma", content: "Regularly evaluates our talent to ensure quality", image: iconkarma, border: "Orange" },
    { name: "Calculator", content: "Uses data from past projects to provide better delivery estimates", image: iconCalculator, border: "Blue" }
  ];

  return (
    <main className="min-h-screen bg-VeryLightGray flex flex-col justify-center items-center">
      <header className="max-w-xl flex flex-col gap-2 text-center mt-12">
        <h1 className="text-2xl text-GrayishBlue">Reliable, efficient delivery</h1>
        <h2 className="text-2xl font-semibold">Powered by Technology</h2>
        <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
        <Box {...boxs[0]} />
        
        <div className="flex flex-col items-center">
          {boxs.slice(1, 3).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>

        <Box {...boxs[3]} />
      </div>
    </main>
  );
}
