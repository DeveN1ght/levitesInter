interface StatCardProps {
  icon: React.ReactNode;
  chiffre: string;
  description: string;
  bgColor: string;
  textcolor: string;
  bordercolor: string;
}

export default function StatCard({bordercolor, bgColor, icon, textcolor, chiffre, description}: StatCardProps){
    return(
        <section className={`bg-gray-100 px-10 rounded-lg border border-1 ${bordercolor} shadow-md py-11 text-center`}>
            <div className={`flex items-center justify-center h-16 w-16 mx-auto rounded-full ${bgColor} mb-4`}>
                {icon}
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${textcolor}`}>{chiffre}</h3>
            <p className="text-gray-600">{description}</p>
        </section>
    )
}