import { Link } from "react-router-dom";

const CryptoThankyou = () => {
  return (
    <>
      <div className="cryptoAbout w-screen h-screen grid place-items-center bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover">
        <div className=" w-[90%] sm:w-[80%] gap-y-5">
          <div className="speakers rounded-lg grid place-items-center p-5 md:p-20">
            <i
              className={`ri-checkbox-circle-line text-green-300 text-8xl lg:text-[200px]`}
            ></i>
            <p className="orbitron text-center text-lg sm:text-2xl md:text-4xl text-white font-bold">
              YOU HAVE SUCCESSFULLY REGISTERED FOR THE TECHYJAUNT CRYPTO
              BOOTCAMP! <br />
              <span className="inline-block text-sm md:text-base saira my-5">
                {" "}
                Your registration to join the TechyJaunt crypto accelerator
                bootcamp has been successful and you will be getting an email
                from us shortly. Please join our general WhatsApp group using
                the button below. If you encounter any difficulties joining, please send an email to <a href="mailto:support@techyjaunt.com">support@techyjaunt.com</a> for assistance.
              </span>
            </p>
            <Link
              to="https://chat.whatsapp.com/KjXOUvUKjqYCoCQ18ob2zm"
              className="saira text-center bg-white text-blue-500 px-5 py-3 rounded-md font-bold hover:scale-105 transition-all ease-in duration-300"
            >
              JOIN THE WHATSAPP COMMUNITY{" "}
              {/* <div className="lg:ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "#128c7e" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CryptoThankyou;
