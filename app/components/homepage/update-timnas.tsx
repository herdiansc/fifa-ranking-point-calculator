export default function UpdateTimnas({rank}) {
  const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

  const d = new Date();
  const currentMonth = month[d.getMonth()];
  return (
    <section className="pb-10 pt-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Update Terbaru {currentMonth} {d.getFullYear()}
              </span>
              <h2 className="mb-3 text-sky-900 text-2xl font-bold sm:text-4xl md:text-[35px] md:leading-[1.2]">
                Peringkat FIFA Indonesia
              </h2>
              <p className="text-base text-body-color">
                Timnas Indonesia saat ini ada di peringkat<br /><span className="text-primary font-bold text-3xl">#{rank}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
