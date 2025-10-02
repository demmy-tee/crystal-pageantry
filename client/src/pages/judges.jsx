import React from 'react'

export default function Judges() {
// src/pages/JudgesHosts.jsx

  return (
    <div className="relative flex min-h-screen flex-col bg-black justify-between overflow-x-hidden font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      {/* Header */}
      <header className="flex items-center bg-black p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-800">
        <h1 className="text-white text-xl font-bold flex-1 text-center pr-8">
          Judges & Hosts
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow p-6">
        {/* Judges Section */}
        <section>
          <h2 className="text-white text-2xl font-bold mb-6">Judges</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <div className="md:flex">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1__SOSSAR5zGz5PWGZJCrgpDK2on6LEcdZ6ISUUMW1OvYvCqmDId1YJv3YAhyLOQ9WZnba-XXPSdiu4-8SQma0OlKA9DTN9h6_uaQOS61VlUj9SOcjz2DxNmVf-6QVNRxN-88i6RhCPhnJN7TLVZnl5YwDCYg5WAFg6l5yJXr_sDI1xf2v-hWfmnwgU9cXi7itkJ41eES6U4sp6h6qmL2sWgoTgVnBk67Blv0u-DDvRVE0Wk49wjA6nHXlDqwdvPpRTC1Vox57DI2"
                  alt="Dr. Adebayo"
                />
                <div className="p-6">
                  <div className="uppercase text-sm text-[var(--gold-color)] font-semibold">
                    Judge
                  </div>
                  <p className="mt-1 text-lg font-medium text-white">
                    Dr. Adebayo
                  </p>
                  <p className="mt-2 text-gray-400 text-sm">
                    A renowned professor of arts and culture, Dr. Adebayo brings
                    a wealth of knowledge and experience to the judging panel.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <div className="md:flex">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziTh6fiAv1XHgPFHoWDAwSvi98euLklvIDncCz1w47p5g72I0X1InBBhoSspXgAHPnzmo2xwbbA8vbASUVl7cZu8UNF4pDOV4PKFhzLwgkevjCN5U6Q3url9456uGpJqAkoVfZRwLy7PO41nbRsf_WJB8qlkO6bUt0HaER64LCarvbZ-90KvIZRMb-PMyO_Yi1GlfBwmru2RADmYEg8_TKa48llvqUYgaDb7C2TmQ90YheIJMQsHwbNOokL74RdYbV0LngZR-gF_5"
                  alt="Ms. Chika"
                />
                <div className="p-6">
                  <div className="uppercase text-sm text-gray-500 font-semibold">
                    Judge
                  </div>
                  <p className="mt-1 text-lg font-medium text-white">
                    Mr. Chukwu
                  </p>
                  <p className="mt-2 text-gray-400 text-sm">
                    A celebrated fashion designer and entrepreneur, Ms. Chika is known for her innovative designs and keen eye for style.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more judges similarly */}
          </div>
        </section>

        {/* Hosts Section */}
        <section className="mt-12">
          <h2 className="text-white text-2xl font-bold mb-6">Hosts</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <div className="md:flex">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BLWSgOJhHOlQICTjqL8FuYiCB0L6xBzGwrPiWEURzKBp2v6qGFsc9s2tj8iqbReR9JUgS_OYZJRka-G5Skl0rhzMV9F-mw4Yqfsn2BE0dLCkMQWOlUUP9wxgzUrY3eS87GD_mkUBj4aZM1vK6k_JIn5XGD5a-wHO77x_6WM9D5jTUVTM4NJ8UI4qmKePkUEaQgRWxGyM3sewtageeKxCjcS1vzCXNXwodMZnJ_YOLYeQNhws9DT6oySMnaiC-0cpwVYe6gHo0Bsu"
                  alt="Mr. Emeka"
                />
                <div className="p-6">
                  <div className="uppercase text-sm text-[var(--gold-color)] font-semibold">
                    Host
                  </div>
                  <p className="mt-1 text-lg font-medium text-white">
                    Mr. Emeka
                  </p>
                  <p className="mt-2 text-gray-400 text-sm">
                    A charismatic and experienced event host, Mr. Emeka is known
                    for his engaging stage presence and ability to captivate
                    audiences.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more hosts similarly */}
          </div>
        </section>
      </main>
    </div>
  );

}
