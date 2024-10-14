import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingPage() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="py-20 md:py-28">
          <div className="container px-4 mx-auto">
            <div className="flex justify-center flex-wrap xl:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 text-center">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
                  Loading
                </span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                  Please Wait...
                </h1>
                <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                  Your content is being prepared. Hang tight!
                </p>
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="animate-spin text-4xl text-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
