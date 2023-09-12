import Image from "next/image";

const Zampa = () => {
    return (
        //
        <div className="grid grid-cols-4 grid-rows-1 xs:flex">
            <Image
                className="mb-3 max-h-[300px] max-w-[500px] xs:max-h-[150px] xs:max-w-[150px]"
                src="/photos/zampa6.jpg"
                width={500}
                height={300}
                alt="Giudice Zampa"
            />
            <div className="ml-[3.5rem] flex flex-col justify-center text-left xs:mb-3 xs:ml-3">
                <h4 className="mb-1 text-2xl font-bold xs:text-base">
                    Il Giudice <i>Zampa</i>
                </h4>
                <text className="text-[19px] xs:text-[12px]">
                    Uno dei migliori nel settore mondiale culinario.
                    <br />
                    Rinomato nel mondo per la sua esperienza di assaggiatore per
                    la Regina Elisabetta
                </text>
            </div>
        </div>
    );
};

export default Zampa;
