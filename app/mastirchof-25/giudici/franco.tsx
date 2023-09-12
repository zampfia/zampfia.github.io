import Image from "next/image";

const Franco = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-1 xs:flex xs:justify-end">
            <div className="minxs:order-1"></div>
            <div className="minxs:order-2"></div>
            <Image
                className="order-4 mb-3 max-h-[300px] max-w-[500px] xs:max-h-[150px] xs:max-w-[150px]"
                src="/photos/franco.png"
                width={500}
                height={300}
                alt="Giudice Franco"
            />
            <div className="order-3 mr-[3.5rem] flex flex-col justify-center text-right xs:mb-3 xs:mr-3">
                <h4 className="mb-1 text-2xl font-bold xs:text-base">
                    Il Giudice <i>Franco</i>
                </h4>
                <text className="text-[19px] xs:text-[12px]">
                    <i>Franco</i>
                </text>
            </div>
        </div>
    );
};

export default Franco;
