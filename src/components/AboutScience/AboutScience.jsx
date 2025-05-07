import silabus from "../../resource/silabus";

export default function AboutScience() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-white py-20">
      <h1 className="text-3xl font-semibold">Uzbek (Rus) tili</h1>
      <p className="max-w-[900px] text-xl max-[425px]:text-base select-none">
        O‘zbek tili fanini o‘qitishdan maqsad – talabalarning o‘zbek tilidan
        egallagan bilim va ko‘nikmalarini mustahkamlash va yanada kengaytirish,
        tanlagan ixtisosliklari doirasida davlat tilini puxta bilishlariga
        yordamlashish, ularning og‘zaki va yozma nutqini kasbiy atamalar bilan
        boyitish, o‘zbek tilidan yuqori darajada nutqiy savodxonlikni
        ta’minlashga erishishdan iborat.
      </p>
      <a
        href={silabus}
        className="block p-[12px_40px] bg-[#23d59c] rounded-[25px] duration-300 min-md:hover:bg-[#ffee00] active:bg-[#00cbff]"
        target="_blank"
      >
        Silabus
      </a>
    </div>
  );
}
