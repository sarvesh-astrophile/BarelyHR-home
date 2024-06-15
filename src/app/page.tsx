import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="px-2 pt-2">
        <div className="rounded-[2rem] bg-amber-200 px-24 pt-16 pb-48">
          <nav className="flex justify-between py-3 ">
            <div>
              <span>Logo</span>
              <span>Banner</span>
            </div>
            <div>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Login</a>
            </div>
          </nav>
          <div>
            <h1>Hire Smarter</h1>
            <p>
              BarelyHR helps small and large companies find the right person for
              the right job.
            </p>
            <div>
              <a href="#">Get started</a>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
