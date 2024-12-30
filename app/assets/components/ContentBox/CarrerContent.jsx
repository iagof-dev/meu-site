import Image from 'next/image';

import CarrerIcon from '/public/assets/svg/path.svg';
import CarrerPath from './elements/CarrerPath';

export default function CarrerContent() {
    return (
        <div>
            <div className='flex h-7 mb-3 select-none'>
                <Image className='invert align-middle mr-2 select-none' src={CarrerIcon} alt="Icon" width={28} height={28} />
                <h1 className='text-xl text-white'>Carreira</h1>
            </div>
            <div className='px-12'>
                <ol className="relative border-s border-purple-600">

                    <CarrerPath title="ETEC Joaquim Ferreira do Amaral | Jaú - SP" description="Análise e Desenvolvimento de Sistemas integrado ao Ensino Médio." startDate="2022" endDate="2024" />

                    {/* <CarrerPath title="Freelance - Remoto" description="Atuando como freelancer." startDate="2024" endDate="202x" /> */}

                </ol>
            </div>
        </div>
    );
}