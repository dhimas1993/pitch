import React, {Component} from 'react';

const data = [
    {
        title: 'Which plan is right for me?',
        paragraph: 'To get our platform’s full benefits, our premium plan will give you unlimited ' +
                'access to the Venture Capital directory, the chance to pitch to investors, ext' +
                'ra slots to our monthly Online Speed Dating, mentoring sessions with experts i' +
                'n the tech field, pitch deck consultation, and strategic calls with StartupInd' +
                'onesia. However, before committing, you can try our free plan which gives you ' +
                'access to 25 Venture Capital directories and one strategy call with StartupInd' +
                'onesia.'
    }, {
        title: 'Is getting the plan guarantee for us to pitch to investor?',
        paragraph: 'Our Premium plan will increase your chances of pitching to investors due to St' +
                'artupIndonesia’s referral, under the condition that you have passed StartupInd' +
                'onesia’s curation. We also have a monthly Online Speed Dating session that wil' +
                'l guarantee your slot(s) to pitch to investors once you passed the curation'
    }, {
        title: 'Is there a succession fee?',
        paragraph: 'Yes, StartupIndonesia will receive 2.5% success fee off total funding raised o' +
                'nly if the introduction happened through our platform'
    }, {
        title: 'How will mentoring work?',
        paragraph: 'The mentoring program is only available for the 3 months and 12 months plan. Y' +
                'ou can pick the mentor from our list at an available schedule. The hour-long m' +
                'entoring session will be held once every 3 months.'
    }, {
        title: 'Who can view my pitchdeck?',
        paragraph: 'Once you have been curated by StartupIndonesia, Investors can see your pitch d' +
                'eck.'
    }, {
        title: 'How can PitchUp help me raise fund?',
        paragraph: 'PitchUp will help you raise funds by giving you referrals to Venture Capitals,' +
                ' monthly Online Speed Dating, feedback for your pitch deck and provide you wit' +
                'h opportunities to consult experts through our mentoring sessions.'
    }, {
        title: 'Can Startup Indonesia invest in my company?',
        paragraph: 'Yes! StartupIndonesia has an Angel Investor fund managed together with MDI Ven' +
                'tures. By joining, you will also get access to all the Angel Investors inside ' +
                'our platform. '
    }, {
        title: 'What if I fundraise outside of PitchUp',
        paragraph: 'Good for you! However, we can not refund your subscription fee. This means you' +
                ' can still claim mentoring sessions with experts and expand your network throu' +
                'gh the founders community,'
    }
]

class Faq extends Component {
    render() {
        return (
            <div>

                <div class="wrap-testimonial-pricing">
                    <h3 class="title-heading-sec-pricing">
                        FAQ'S
                    </h3>
                    <div {...{ className: 'wrap-faq-dropdown-c' }}>
                        <ul {...{ className: 'accordion-list' }}>
                            {
                                data.map((data, key) => {
                                    return (
                                        <li {...{ className: 'accordion-list__item', key }}>
                                            <AccordionItem {...data}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Faq

class AccordionItem extends React.Component {
    state = {
        opened: false
    }

    render() {
        const {
            props: {
                paragraph,
                title
            },
            state: {
                opened
            }
        } = this

        return (
            <div
                {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}>
                <div {...{ className: 'accordion-item__line' }}>
                    <h3 {...{ className: 'accordion-item__title' }}>
                        {title}
                    </h3>
                    <span {...{ className: 'accordion-item__icon' }}>
                        <i className="fa fa-chevron-down"></i>
                    </span>
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'panel-tb-in' }}>
                        <p>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}