import React from 'react'

const OurGoals = () => {
    // const links = [
    //     { name: 'Open roles', href: '#' },
    //     { name: 'Internship program', href: '#' },
    //     { name: 'Our values', href: '#' },
    //     { name: 'Meet our leadership', href: '#' },
    //   ]
      const stats = [
        { name: 'Offices worldwide', value: '6' },
        { name: 'Number of Stores', value: '100+' },
        { name: 'In Cities', value: '30' },
        { name: 'Happy Customers', value: '45K' },
      ]
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 rounded-xl m-2 shadow-sm">
      <img
        alt=""
        src="https://img.freepik.com/free-photo/cosmetics-products-with-space-text-white-background_23-2147818092.jpg?t=st=1730539080~exp=1730542680~hmac=040ee02bdf0be2e477ff903dc290a78a4a4079c835c40dde9668ada2ec551456&w=1380"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#69f2ff] to-[#a4fdff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#00b5b7] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-[#00b5b7] sm:text-7xl">Buy with Fitnova</h2>
          <p className="mt-8 text-pretty text-md font-medium text-black sm:text-xl/8">
          Fitnova is a trusted house of brands with MuscleBlaze and FN Vitals being India’s no. 1 sports nutrition and online vitamin brands. Fitnova also offers a comprehensive range of products dedicated to the vegan community, kids and women for their wellness and fitness needs.Fitnova is also supported by 100+ retail stores making us your one-stop fitness and health destination.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div> */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1 animate-pulse">
                <dt className="text-base/7 text-gray-800">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-teal-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default OurGoals