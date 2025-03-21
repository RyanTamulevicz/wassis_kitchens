export default function About(props: { children: React.ReactNode }) {
  return (
    <div className='container'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          About Wassi's Outdoor Kitchens
        </h2>
        <div className='w-20 h-1 bg-primary mx-auto'></div>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h3 className='text-2xl font-semibold mb-4'>
            Crafting Outdoor Culinary Experiences Since 1986
          </h3>
          <p className='text-muted-foreground mb-4'>
            For over 35 years, Wassi's Outdoor Kitchens has been the premier
            provider of custom outdoor kitchen solutions in the region. What
            started as a small family business has grown into a trusted name in
            outdoor living spaces.
          </p>
          <p className='text-muted-foreground mb-4'>
            We believe that your outdoor space should be an extension of your
            home - a place where memories are made and shared over delicious
            meals. Our team of expert designers and craftsmen work closely with
            you to create the perfect outdoor kitchen that fits your lifestyle
            and budget.
          </p>
          <div className='grid grid-cols-2 gap-6 mt-8'>
            <div className='text-center'>
              <h4 className='text-4xl font-bold text-primary mb-2'>35+</h4>
              <p className='text-sm text-muted-foreground'>
                Years of Experience
              </p>
            </div>
            <div className='text-center'>
              <h4 className='text-4xl font-bold text-primary mb-2'>500+</h4>
              <p className='text-sm text-muted-foreground'>
                Projects Completed
              </p>
            </div>
            <div className='text-center'>
              <h4 className='text-4xl font-bold text-primary mb-2'>100%</h4>
              <p className='text-sm text-muted-foreground'>
                Satisfaction Guaranteed
              </p>
            </div>
            <div className='text-center'>
              <h4 className='text-4xl font-bold text-primary mb-2'>5★</h4>
              <p className='text-sm text-muted-foreground'>Customer Rating</p>
            </div>
          </div>
        </div>
        <div className='relative h-[400px] md:h-[500px]'>{props.children}</div>
      </div>
    </div>
  );
}
