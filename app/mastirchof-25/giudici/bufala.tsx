import Image from "next/image";

const Bufala = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-1 xs:flex">
            <Image
                className="mb-3 max-h-[300px] max-w-[500px] xs:max-h-[150px] xs:max-w-[150px]"
                src="/photos/fratelli bufala.png"
                width={500}
                height={300}
                alt="Giudici Fratelli Bufala"
            />
            <div className="ml-[3.5rem] flex flex-col justify-center text-left xs:mb-3 xs:ml-3">
                <h4 className="mb-1 text-2xl font-bold xs:text-base">
                    I Giudici <i>Fratelli Bufala</i>
                </h4>
                <text className="text-[19px] xs:text-[12px]">
                    La coppia di cuochi migliore di Italia. Hanno cucinato per
                    tutti i grandi del mondo (come Zampa, il Monte Everest e la
                    Statua dell'Unita in India)
                </text>
            </div>
        </div>
    );
};
export default Bufala;
