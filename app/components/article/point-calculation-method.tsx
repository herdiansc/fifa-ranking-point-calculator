import React from 'react';

export default function PointCalculationMethod(): React.ReactNode {
  return (
    <>
      <div className="relative z-10 overflow-hidden pb-[60px] pt-[60px]">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-sky-900 sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Cara Perhitungan Poin dan Peringkat FIFA
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

      <section className="pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-10/12 px-6 lg:px-12">
              <div>
                <div className="markdown w-full break-words">
                  <p className="mb-8 text-base text-body-color">
                    Peringkat FIFA adalah sistem peringkat yang digunakan untuk
                    menilai kinerja tim nasional sepak bola di seluruh dunia.
                    Sistem ini diperbarui secara berkala dan menjadi acuan
                    penting bagi penggemar sepak bola, pelatih, hingga asosiasi
                    sepak bola internasional. Di artikel ini, kita akan membahas
                    bagaimana cara menghitung peringkat FIFA dengan
                    langkah-langkah yang sederhana dan mudah dipahami.
                  </p>
                  <h2 className="mb-8 text-2xl font-bold text-sky-900">
                    Apa Itu Peringkat FIFA?
                  </h2>
                  <p className="mb-8 text-base text-body-color">
                    Peringkat FIFA adalah peringkat resmi yang diterbitkan oleh
                    FIFA (Fédération Internationale de Football Association).
                    Peringkat ini digunakan untuk mengukur kinerja tim nasional
                    berdasarkan hasil pertandingan internasional, baik di
                    turnamen resmi maupun pertandingan persahabatan.
                  </p>
                  <h2 className="mb-8 text-2xl font-bold text-sky-900">
                    Dasar Perhitungan Peringkat FIFA
                  </h2>
                  <p className="mb-8 text-base text-body-color">
                    Pada 2018, FIFA memperkenalkan formula baru yang dikenal
                    sebagai <strong>"SUM Model" atau Elo Rating System</strong>.
                    Formula ini menggantikan sistem sebelumnya untuk memberikan
                    hasil yang lebih adil dan akurat.{' '}
                  </p>
                  <p className="mb-8 text-base text-body-color">
                    Berikut adalah rumus dasar yang digunakan:
                  </p>

                  <div
                    className="relative z-10 mb-10 overflow-hidden rounded-[5px] bg-primary/5 px-6 py-8 text-center sm:p-10 md:px-[60px]"
                    data-wow-delay=".1s"
                  >
                    <div className="mx-auto max-w-[530px]">
                      <p className="mb-[18px] text-base italic leading-[28px] text-primary">
                        <strong>P = Psebelumnya + I × (W - We)</strong>
                      </p>
                    </div>
                    <div>
                      <span className="absolute top-0 left-0">
                        <svg
                          width="103"
                          height="109"
                          viewBox="0 0 103 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="0.483916"
                            cy="3.5"
                            rx="102.075"
                            ry="105.5"
                            transform="rotate(180 0.483916 3.5)"
                            fill="url(#paint0_linear_2014_9016)"
                          ></ellipse>
                          <defs>
                            <linearGradient
                              id="paint0_linear_2014_9016"
                              x1="-101.591"
                              y1="-50.4346"
                              x2="49.1618"
                              y2="-49.6518"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="#3056D3"
                                stopOpacity="0.15"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0">
                        <svg
                          width="102"
                          height="106"
                          viewBox="0 0 102 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="102.484"
                            cy="105.5"
                            rx="102.075"
                            ry="105.5"
                            fill="url(#paint0_linear_2014_9017)"
                          ></ellipse>
                          <defs>
                            <linearGradient
                              id="paint0_linear_2014_9017"
                              x1="0.409163"
                              y1="51.5654"
                              x2="151.162"
                              y2="52.3482"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="#3056D3"
                                stopOpacity="0.15"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              ></stop>
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
                      - <strong>W</strong>: Hasil pertandingan (1 untuk menang,
                      0.5 untuk seri, dan 0 untuk kalah).
                    </li>
                    <li>
                      - <strong>We</strong>: Perkiraan probabilitas kemenangan
                      tim berdasarkan rating sebelumnya.
                    </li>
                  </ul>
                  <h2 className="my-8 text-2xl font-bold text-sky-900">
                    Penjelasan Elemen dalam Formula
                  </h2>
                  <ol>
                    <li>
                      <p className="my-2 text-base text-body-color">
                        <strong>Bobot Pentingnya Pertandingan (I)</strong>
                        <br />
                        Setiap pertandingan memiliki bobot yang berbeda,
                        tergantung dari tingkat kompetisi:
                      </p>
                      <ul className="my-2">
                        <li>- Pertandingan persahabatan: 5 - 10</li>
                        <li>
                          - Kualifikasi turnamen (seperti Piala Dunia atau Piala
                          Asia): 25
                        </li>
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
                        <br />
                        Probabilitas dihitung menggunakan formula: <br />
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
                  <h2 className="my-8 text-2xl font-bold text-sky-900">
                    Contoh Perhitungan
                  </h2>
                  <p className="my-2 text-base text-body-color">Misalkan:</p>
                  <ul>
                    <li>
                      - Tim A memiliki 1300 poin, sedangkan Tim B memiliki 1200
                      poin.
                    </li>
                    <li>
                      - Pertandingan adalah bagian dari kualifikasi Piala Dunia
                      (I = 25).
                    </li>
                    <li>- Tim A menang atas Tim B.</li>
                  </ul>
                  <p className="my-2 text-base text-body-color">
                    Langkah-langkah:
                  </p>
                  <ol>
                    <li>
                      - Hitung probabilitas kemenangan (We) Tim A:{' '}
                      <strong>
                        We = 1 / (10^(-(1300 - 1200)/600) + 1) = 0.64
                      </strong>
                    </li>
                    <li>
                      - Tentukan hasil pertandingan (W): Tim A menang, maka W =
                      1
                    </li>
                    <li>
                      - Hitung poin baru untuk Tim A:{' '}
                      <strong>P = 1300 + 25 × (1 - 0.64) = 1309</strong>
                    </li>
                  </ol>
                  <p className="my-2 text-base text-body-color">
                    Maka tim A mendapatkan 9 poin tambahan.
                  </p>
                  <h2 className="my-8 text-2xl font-bold text-sky-900">
                    Kesimpulan
                  </h2>
                  <p className="my-2 text-base text-body-color">
                    Menghitung peringkat FIFA tidaklah rumit jika Anda memahami
                    elemen-elemen yang memengaruhinya. Sistem ini dirancang
                    untuk mencerminkan performa tim secara objektif berdasarkan
                    hasil pertandingan. Dengan memahami cara kerja peringkat
                    FIFA, Anda dapat lebih menghargai proses di balik angka yang
                    sering kita lihat di klasemen internasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
