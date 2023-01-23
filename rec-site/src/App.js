
import './App.css';
import ResponsiveAppBar from "./MenuAppBar"

function MakeHeader() {
  return (
    <ResponsiveAppBar />
    
    // <div class="header">
    //   <nav>
    //     <ul>
    //       <li key="home"><Link to="/">Home</Link></li>
    //       <li key="about"><Link to="/about">About</Link></li>
    //       <li key="contact"><Link to="/contact">Contact</Link></li>
    //     </ul>
    //   </nav>
    // </div>
  )
}
function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Want Unique Recommendations?</h1>
      <article>
        <p>Whether you're simply tired of YouTube's algorithm
          being "too good" or you want to play an active role
          in combatting echo chambers, perhaps you've made
          the decision that YouTube's current recommendations
          are simply not for you.
        </p>
        <p>
          Get Rec'd aims to create unique, user-controlled recommendations
          based on the videos you already watch on YouTube. By utilizing
          a number of assets, the videos coming to you promise to be broader,
          more colorful, and perhaps a bit off the beaten path.
        </p>
        <p>
          Click "Sign Up" if you're ready to see what else there is in
          the wide world, and break out of your own box.
        </p>
      </article>
      <button>Sign Up</button>
      <button>Log In</button>
    </div>
  );
}

export function About() {
  return (
    <div>
      <MakeHeader />
      <h1>This is the about page</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <MakeHeader />
      <h1>This is the contact page</h1>
    </div>   
  )
}
export function App() {
  return <Home />;
}
