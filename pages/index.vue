<template>
  <main class="mt-10">
    <h1 class="max-w-[500px] text-6xl font-bold">
      Introducing the Flume <span class="font-serif italic">Rhine</span>.
    </h1>
    <p class="text-xl max-w-prose mt-5">
      Experience typing reimagined. The Flume Rhine is our first 34-key split
      keyboard, designed to be a gateway to uninterrupted creativity and focus.
      Join the waitlist and be the first to know about Flume Rhine updates,
      exclusive offers, and launch details.
    </p>
    <Button class="w-[150px] mt-10"
      >Join Waitlist <ArrowRight class="ml-5 h-4" :font-controlled="false" />
    </Button>
    <Separator class="my-20 bg-background" />
    <h2 class="text-4xl font-medium">Key Features</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
      <li>
        <strong class="font-medium text-xl">Ergonomic Split Design</strong>
        <p>
          Our 34-key layout redefines efficiency. The split configuration
          promotes natural hand positioning, significantly reducing wrist
          strain. With every key just one unit away from home row, you'll
          experience faster, more comfortable typing with minimal finger travel.
        </p>
      </li>
      <li>
        <strong class="font-medium text-xl">Ultra-Thin Profile</strong>
        <p>
          Embrace true portability with our sleek, low-profile design. At just
          15mm thick, the Flume Rhine slides effortlessly into your laptop bag.
          Experience desktop comfort anywhere &mdash; from coffee shops to
          coworking spaces &mdash; without compromising on ergonomics.
        </p>
      </li>
      <li>
        <strong class="font-medium text-xl">Customizable Layout</strong>
        <p>
          Tailor your Flume Rhine to your unique workflow. With support for
          multiple layers, you can program complex macros, application-specific
          shortcuts, and personalized key arrangements. Transform your keyboard
          into a powerful tool that adapts to you, not the other way around.
        </p>
      </li>
      <li>
        <strong class="font-medium text-xl">Wireless First</strong>
        <p>
          Cut the cord and boost your productivity. Our advanced power
          management ensures weeks of use on a single charge, while multi-device
          Bluetooth connectivity lets you switch seamlessly between your
          computer, tablet, and phone. Enjoy a clutter-free desk and the freedom
          to type anywhere.
        </p>
      </li>
      <li>
        <strong class="font-medium text-xl">Evolving Design</strong>
        <p>
          Be part of keyboard evolution. Our 3D-printed cases allow for rapid
          prototyping and iteration. This approach means you'll always have
          access to the latest improvements and refinements, ensuring your Flume
          Rhine stays at the cutting edge of keyboard technology.
        </p>
      </li>
    </ul>
    <Separator class="my-20 bg-background" />
    <h2 class="text-4xl font-medium">Frequently Asked Questions</h2>
    <Accordion type="single" class="max-w-prose mb-20" collapsible>
      <AccordionItem v-for="item in faqs" :key="item.value" :value="item.value">
        <AccordionTrigger>
          <p class="text-left">{{ item.question }}</p>
        </AccordionTrigger>
        <AccordionContent>
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </main>
</template>

<script setup lang="ts">
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Separator from "~/components/ui/separator/Separator.vue";

const faqs = [
  {
    value: "q-1",
    question: "When will the Flume Rhine be available?",
    answer:
      "We're currently in the pre-order phase. We expect to start shipping in December, 2024. Join our waitlist to be notified of the exact launch date and to secure early-bird pricing.",
  },
  {
    value: "q-2",
    question: "How long does the battery last?",
    answer:
      "The Flume Rhine is designed for efficiency. With normal use, you can expect several weeks of battery life on a single charge. Actual battery life may vary depending on usage patterns and settings.",
  },
  {
    value: "q-3",
    question: "Is the Flume Rhine compatible with my operating system?",
    answer:
      "Yes! The Flume Rhine is compatible with Windows, macOS, Linux, iOS, and Android. It connects via Bluetooth, ensuring wide compatibility across devices.",
  },
  {
    value: "q-4",
    question: "Can I customize the key layout?",
    answer:
      "Absolutely! The Flume Rhine supports multiple layers, allowing you to program custom key mappings, macros, and shortcuts. We provide a user-friendly configurator tool to help you create your perfect layout.",
  },
  {
    value: "q-5",
    question: "How long does it take to adjust to the split layout?",
    answer:
      "While adjustment times vary, most users report feeling comfortable within 2-4 weeks of consistent use. The learning curve is well worth the ergonomic benefits and increased productivity.",
  },
];
</script>
