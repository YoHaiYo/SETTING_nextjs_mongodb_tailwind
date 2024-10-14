import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
export default function IndexPage() {
  return (
    <>
      {/* <FontAwesomeIcon icon={faUser} width={20} />
      <h1>Hello, IndexPage!</h1> */}

      <section className="relative bg-white overflow-hidden">
        <div className="py-20 md:py-28">
          <div className="container px-4 mx-auto">
            <div className="flex justify-center flex-wrap xl:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
                  Welcome
                </span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                  Simplify Your URL Management Effortlessly.
                </h1>
                <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                  Our platform makes saving and organizing URLs a breeze! Just
                  paste a URL and hit enter to instantly save it, complete with
                  an auto-generated favicon. Organize your links into categories
                  and choose from various views—simple, grid, or list—to
                  maximize your convenience.
                </p>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                    <a
                      href="/login"
                      className="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                    >
                      Try It Now
                    </a>
                  </div>
                  <div className="w-full md:w-auto py-1 md:py-0">
                    <a
                      href="/signup"
                      className="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                    >
                      Sign Up for Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
