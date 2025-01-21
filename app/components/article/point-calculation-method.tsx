export default function PointCalculationMethod() {
  return (
    <>
      <div className="relative z-10 overflow-hidden pb-[60px] pt-[100px]">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-sky-900 sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Cara Penghitungan Poin dan Peringkat FIFA
                </h1>
                <p className="mb-5 text-base text-body-color ">
                  Cara Menghitung Peringkat FIFA: Penjelasan Lengkap dan Contoh
                  Perhitungan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-10/12 px-6 lg:px-12">
                  <div>
                  <div className="markdown w-full break-words">
  <p className="mb-8 text-base text-body-color">Peringkat FIFA adalah sistem peringkat yang digunakan untuk menilai kinerja tim nasional sepak bola di seluruh dunia. Sistem ini diperbarui secara berkala dan menjadi acuan penting bagi penggemar sepak bola, pelatih, hingga asosiasi sepak bola internasional. Di artikel ini, kita akan membahas bagaimana cara menghitung peringkat FIFA dengan langkah-langkah yang sederhana dan mudah dipahami.</p>
  <h2 className="mb-8 text-2xl font-bold text-sky-900">Apa Itu Peringkat FIFA?</h2>
  <p className="mb-8 text-base text-body-color">Peringkat FIFA adalah peringkat resmi yang diterbitkan oleh FIFA (Fédération Internationale de Football Association). Peringkat ini digunakan untuk mengukur kinerja tim nasional berdasarkan hasil pertandingan internasional, baik di turnamen resmi maupun pertandingan persahabatan.</p>
  <h2 className="mb-8 text-2xl font-bold text-sky-900">Dasar Perhitungan Peringkat FIFA</h2>
  <p className="mb-8 text-base text-body-color">Pada 2018, FIFA memperkenalkan formula baru yang dikenal sebagai <strong>"SUM Model" atau Elo Rating System</strong>. Formula ini menggantikan sistem sebelumnya untuk memberikan hasil yang lebih adil dan akurat. </p>
  <p className="mb-8 text-base text-body-color">Berikut adalah rumus dasar yang digunakan:</p>

  <div className="relative z-10 mb-10 overflow-hidden rounded-[5px] bg-primary/5 px-6 py-8 text-center sm:p-10 md:px-[60px]" data-wow-delay=".1s">
                    <div className="mx-auto max-w-[530px]">
                      <span className="mb-[14px] flex justify-center text-primary">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                          <path d="M13.7995 35.5781C12.937 35.5781 12.1464 35.075 11.8589 34.2844L9.48702 28.5344C6.82765 28.1031 4.45577 26.7375 2.9464 24.6531C1.36515 22.5687 0.862021 19.9812 1.5089 17.4656C2.51515 13.3687 6.75577 10.2781 11.4276 10.35C14.7339 10.4219 17.4651 11.7875 19.262 14.2312C20.987 16.675 21.4183 19.9812 20.412 23C19.4776 25.7312 18.2558 28.4625 17.1058 31.1219C16.6745 32.2 16.1714 33.2781 15.7401 34.2844C15.4526 35.075 14.662 35.5781 13.7995 35.5781ZM11.2839 13.5844C8.1214 13.5844 5.2464 15.5969 4.59952 18.2562C4.24015 19.8375 4.52765 21.4187 5.5339 22.7125C6.6839 24.2937 8.62452 25.3 10.7089 25.4437L11.7151 25.5156L13.7995 30.5469C13.8714 30.3312 14.0151 30.0437 14.087 29.8281C15.237 27.2406 16.387 24.5812 17.2495 21.9219C17.9683 19.9094 17.6808 17.6812 16.5308 16.1C15.3808 14.5187 13.5839 13.6562 11.3558 13.5844C11.3558 13.5844 11.3558 13.5844 11.2839 13.5844Z"></path>
                          <path d="M37.5905 35.65C36.728 35.65 35.9374 35.1469 35.6499 34.3563L33.278 28.6063C30.6187 28.175 28.2468 26.8094 26.7374 24.725C25.1562 22.6406 24.653 20.0531 25.2999 17.5375C26.3062 13.4406 30.5468 10.35 35.2187 10.4219C38.5249 10.4938 41.2562 11.8594 42.9812 14.3031C44.7062 16.7469 45.1374 20.0531 44.1312 23.0719C43.1968 25.8031 41.9749 28.5344 40.8249 31.1938C40.3937 32.2719 39.8905 33.35 39.4593 34.3563C39.2437 35.1469 38.453 35.65 37.5905 35.65ZM35.0749 13.5844C31.9124 13.5844 29.0374 15.5969 28.3905 18.2563C28.0312 19.8375 28.3187 21.4188 29.3249 22.7844C30.4749 24.3656 32.4155 25.3719 34.4999 25.5156L35.5062 25.5875L37.5905 30.6188C37.6624 30.4031 37.8062 30.1156 37.878 29.9C39.028 27.3125 40.178 24.6531 41.0405 21.9938C41.7593 19.9813 41.4718 17.7531 40.3218 16.1C39.1718 14.5188 37.3749 13.6563 35.1468 13.5844C35.1468 13.5844 35.1468 13.5844 35.0749 13.5844Z"></path>
                        </svg>
                      </span>
                      <p className="mb-[18px] text-base italic leading-[28px] text-primary">
                        <strong>P = Psebelumnya + I × (W - We)</strong>
                      </p>
                    </div>
                    <div>
                      <span className="absolute top-0 left-0">
                        <svg width="103" height="109" viewBox="0 0 103 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="0.483916" cy="3.5" rx="102.075" ry="105.5" transform="rotate(180 0.483916 3.5)" fill="url(#paint0_linear_2014_9016)"></ellipse>
                          <defs>
                            <linearGradient id="paint0_linear_2014_9016" x1="-101.591" y1="-50.4346" x2="49.1618" y2="-49.6518" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#3056D3" stopOpacity="0.15"></stop>
                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0">
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="102.484" cy="105.5" rx="102.075" ry="105.5" fill="url(#paint0_linear_2014_9017)"></ellipse>
                          <defs>
                            <linearGradient id="paint0_linear_2014_9017" x1="0.409163" y1="51.5654" x2="151.162" y2="52.3482" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#3056D3" stopOpacity="0.15"></stop>
                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>

  <p className="text-base text-body-color">Keterangan:</p>
  <ul>
    <li>
      - <strong>P</strong>: Poin peringkat baru.
    </li>
    <li>
      - <strong>Psebelumnya</strong>: Poin peringkat sebelumnya.
    </li>
    <li>
      - <strong>I</strong>: Bobot pentingnya pertandingan.
    </li>
    <li>
      - <strong>W</strong>: Hasil pertandingan (1 untuk menang, 0.5 untuk seri, dan 0 untuk kalah).
    </li>
    <li>
      - <strong>We</strong>: Perkiraan probabilitas kemenangan tim berdasarkan rating sebelumnya.
    </li>
  </ul>
  <h2 className="my-8 text-2xl font-bold text-sky-900">Penjelasan Elemen dalam Formula</h2>
  <ol>
    <li>
      <p className="my-2 text-base text-body-color">
        <strong>Bobot Pentingnya Pertandingan (I)</strong>
        <br />Setiap pertandingan memiliki bobot yang berbeda, tergantung dari tingkat kompetisi:
      </p>
      <ul className="my-2">
        <li>- Pertandingan persahabatan: 5 - 10</li>
        <li>- Kualifikasi turnamen (seperti Piala Dunia atau Piala Asia): 25</li>
        <li>- Turnamen regional: 35 - 40</li>
        <li>- Piala Dunia FIFA: 50</li>
      </ul>
    </li>
    <li>
      <p className="my-2 text-base text-body-color">
        <strong>Hasil Pertandingan (W)</strong>
      </p>
      <ul>
        <li>- Kemenangan: 1</li>
        <li>- Seri: 0.5</li>
        <li>- Kekalahan: 0</li>
      </ul>
    </li>
    <li>
      <p className="my-2 text-base text-body-color">
        <strong>Probabilitas Kemenangan (We)</strong>
        <br />Probabilitas dihitung menggunakan formula: <br />
        <strong>We = 1 / (10^(-(Pr - Po)/600) + 1)</strong>
      </p>
      <ul>
        <li>
          - <strong>Pr</strong>: Poin peringkat tim saat ini.
        </li>
        <li>
          - <strong>Po</strong>: Poin peringkat lawan.
        </li>
      </ul>
    </li>
  </ol>
  <h2 className="my-8 text-2xl font-bold text-sky-900">Contoh Perhitungan</h2>
  <p className="my-2 text-base text-body-color">Misalkan:</p>
  <ul>
    <li>- Tim A memiliki 1300 poin, sedangkan Tim B memiliki 1200 poin.</li>
    <li>- Pertandingan adalah bagian dari kualifikasi Piala Dunia (I = 25).</li>
    <li>- Tim A menang atas Tim B.</li>
  </ul>
  <p className="my-2 text-base text-body-color">Langkah-langkah:</p>
  <ol>
    <li>
      - Hitung probabilitas kemenangan (We) Tim A: <strong>We = 1 / (10^(-(1300 - 1200)/600) + 1) = 0.64</strong>
    </li>
    <li>
      - Tentukan hasil pertandingan (W): Tim A menang, maka W = 1
    </li>
    <li>
      - Hitung poin baru untuk Tim A: <strong>P = 1300 + 25 × (1 - 0.64) = 1309</strong>
    </li>
  </ol>
  <p className="my-2 text-base text-body-color">Maka tim A mendapatkan 9 poin tambahan.</p>
  <h2 className="my-8 text-2xl font-bold text-sky-900">Kesimpulan</h2>
  <p className="my-2 text-base text-body-color">Menghitung peringkat FIFA tidaklah rumit jika Anda memahami elemen-elemen yang memengaruhinya. Sistem ini dirancang untuk mencerminkan performa tim secara objektif berdasarkan hasil pertandingan. Dengan memahami cara kerja peringkat FIFA, Anda dapat lebih menghargai proses di balik angka yang sering kita lihat di klasemen internasional.</p>
</div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
