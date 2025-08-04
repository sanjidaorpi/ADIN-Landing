# ADIN Landing Page

Build Notes

Decisions I'm Proud Of:
One of the most thoughtfully developed elements was the animation on the multicolor tag. I explored multiple animation styles, using a sliding carousel approach. While the final spacing between words does not match the original design exactly, I determined that a slightly adjusted spacing provided the best centering effect and visual consistency. Approaches that adhered strictly to the Figma spacing often caused jitter or misalignment, which negatively impacted the overall feel. After multiple iterations, this current version felt the most balanced and visually smooth but I am curious to see what other think of the other animations like sliding between words and less fade time.

I also spent time refining the gradient sweep animations on select text elements. After experimenting with timing and scale, I was able to create a transition that feels responsive and polished. 

On desktop view, I believe the design closely matches the intended spec and performs well.

Tradeoffs:
To achieve smoother motion in the multicolor tag animation, I intentionally deviated from the exact design spacing. This decision was made to avoid jittering or misalignment during animation, which occurred when using strict word spacing. The result is a more stable and visually appealing effect, at the cost of precise spacing fidelity.

Another tradeoff involves the rainbow gradient under the hero section on mobile devices. The animation occasionally misaligns or jumps on smaller screens. I am considering removing it from the mobile view to ensure a smoother transition and cleaner experience.

Fast Follows:
Improve responsiveness across screen sizes, particularly:

Refining layout under the hero section

Adjusting spacing and positioning around the "Live Reports" tab on mobile

Update the Supported by Humans card:

Currently, all cards display Ryan Hoover as a placeholder to demonstrate animation functionality. These will be updated with accurate supporter data if I can have access to those details.

Replace placeholder content in the FAQ section:
One of the answers I didn't find on the current live site so I need the details to update that.

Continue testing and adjusting layout and animations based on user feedback, with a focus on improving the fluidity of the multicolor tag and refining mobile interactions.
