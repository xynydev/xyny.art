<script>
    let open = $state(true);
    let preferencesOpen = $state(false);

    const stabbingPartners = [
        {
            groupName: "Essential Stabbing Partners",
            groupDescription: "Our Essential Stabbing Partners ensure that basic stabbing operations are conducted reliably and without interruption.",
            partners: [
                "Acute Solutions",
                "BladeCore Logistics",
                "Precision Puncture Systems",
                "Razorpoint Industries",
                "Steel Intentions Inc.",
                "Tactical Tipworks",
                "Apex Stab Services",
                "Direct Thrust Global",
                "EdgeSync Partners",
                "Bladecraft Utilities",
                "Vital Penetrations LLC",
                "Corepierce Systems",
                "Standard Thrusts Network",
                "Sharpforce Dynamics",
                "Incisive Innovations",
                "TrueEdge Partners",
                "Clearcut Enterprises",
                "SteelSight Solutions",
                "CorePuncture Services",
                "ExactEdge Technologies",
                "EverSharp Logistics",
                "ThrustWorks Corporation",
                "PointPrecision Solutions",
                "Perforate Global",
                "BladeLink Services",
                "PuncturePro Systems",
                "SharpPro Logistics",
                "EdgeSafe Partners",
                "CutSharp Industries",
                "SharpCraft Solutions"
            ]
        },
        {
            groupName: "Personalized Stabbing Partners",
            groupDescription: "These partners specialize in tailoring stabbing services to your individual needs and history for a more meaningful experience.",
            partners: [
                "CustomPierce Co.",
                "BladeCraft Tailoring",
                "Piercer's Choice Ltd.",
                "PersonaStab Solutions",
                "ThrustPro Analytics",
                "SharpEdge Personalizers",
                "Targeted Blade Co.",
                "Dynamic Puncture Strategies",
                "Precision Stab Metrics",
                "Adaptive Edge Partners",
                "Piercing Insight Ltd.",
                "Edge Enhancements LLC",
                "DirectPoint Custom Solutions",
                "Personalized Steelworks",
                "Tailored Impact Analytics",
                "Bespoke Blades Corp.",
                "StabPersona Solutions",
                "CustomSharp Technologies",
                "ImpactSharp Global",
                "PrecisionEdge Design",
                "ThrustPerfected Ltd.",
                "PersonaPoint Innovations",
                "TargetSharp Enterprises",
                "AdaptivePoint Systems",
                "Sculpted Thrusts Co.",
                "NextGen Stab Partners",
                "PointCraft Solutions",
                "UniqueBlade Technologies",
                "ImpactMode Systems",
                "SharpCraft Personalized"
            ]
        },
        {
            groupName: "Ethical Stabbing Partners",
            groupDescription: "Focused on responsible stabbing practices, these partners uphold strict standards to ensure your safety and satisfaction.",
            partners: [
                "Conscious Edge Co.",
                "Sustainable Stabbings Ltd.",
                "GreenBlade Partners",
                "Impact Ethics Incorporated",
                "Moral Thrust Solutions",
                "Equitable Piercing Co.",
                "Balanced Edge Analytics",
                "Penetration for Good",
                "The Ethical Edge Collective",
                "JustBlade Dynamics",
                "Purposeful Stabs Inc.",
                "FairPierce Enterprises",
                "Mindful Puncture Solutions",
                "TrustEdge Corp.",
                "The Sustainable Thrust Alliance",
                "CleanCut Solutions",
                "EcoSharp Global",
                "SafeEdge Systems",
                "Principled Pierce Corp.",
                "EthicBlade Technologies",
                "FairThrust Enterprises",
                "PurePierce Ltd.",
                "GreenEdge Dynamics",
                "SharpSustain Partners",
                "BalancedThrust Solutions",
                "TrueEdge Innovations",
                "EthosBlade Partners",
                "EcoStab Solutions",
                "Integrity Thrust Corp.",
                "SustainEdge Partners"
            ]
        },
        {
            groupName: "Advanced Stabbing Technology Partners",
            groupDescription: "Pioneering cutting-edge stabbing technologies for maximum precision and efficiency.",
            partners: [
                "NanoEdge Systems",
                "HyperSharp Dynamics",
                "Quantum Blade Inc.",
                "SmartStab Analytics",
                "EdgeSense Technologies",
                "UltraPierce Labs",
                "Neural Thrust Systems",
                "Precision AI Stabbings",
                "BladeBots Inc.",
                "FuturePierce Technologies",
                "RazorEdge Innovations",
                "Adaptive Penetration Networks",
                "NanoStab Ltd.",
                "Accelerated Thrustworks",
                "AI SharpForce",
                "StabSync Technologies",
                "CyberEdge Solutions",
                "SharpAI Innovations",
                "Bladelogic Systems",
                "TechThrust Corp.",
                "VirtualPierce Labs",
                "StabSense Global",
                "InnoBlade Technologies",
                "EdgeTech Systems",
                "ThrustX Solutions",
                "PrecisionAI Edge",
                "SharpTech Partners",
                "FuturePoint Stabbing",
                "StabLink Innovations",
                "QuantumThrust Corp."
            ]
        },
        {
            groupName: "Collaborative Stabbing Partners",
            groupDescription: "These partners work closely with us to deliver shared and optimized stabbing services.",
            partners: [
                "ThrustSync Enterprises",
                "PartnerBlade Global",
                "Collaborative Piercing Network",
                "Joint Stabworks",
                "BladeUnity Co.",
                "Synergized Sharpness LLC",
                "ThrustTogether Corp.",
                "Mutual Punctures Ltd.",
                "CoPierce International",
                "SharpSync Alliance",
                "Integrated Stabbings LLC",
                "SharedEdge Solutions",
                "Partnership Penetration Group",
                "Unified Blade Services",
                "CoSharp Dynamics",
                "ThrustCorp Solutions",
                "CollectiveThrust Partners",
                "HarmonicEdge Group",
                "SynergySharp Innovations",
                "StabConnect Systems",
                "UnitedThrust Co.",
                "PierceAlliance Global",
                "CollaborEdge Dynamics",
                "SharpFusion Networks",
                "PierceSync Partners",
                "EdgeCollective Corp.",
                "SyncThrust Solutions",
                "CollaboBlade Enterprises",
                "CollectiveImpact Technologies",
                "UnifiedEdge Systems"
            ]
        },
        {
            groupName: "Legacy Stabbing Partners",
            groupDescription: "These partners bring years of trusted expertise and history to the stabbing field.",
            partners: [
                "Foundation Thrustworks",
                "The Pioneer Blade Group",
                "Timeless Steelworks",
                "Historic Edge Solutions",
                "Enduring Stab Dynamics",
                "AntiqueEdge Systems",
                "Jack",
                "FoundationSharp Partners",
                "OldSchool Bladeworks",
                "Timeless Impact Innovations",
                "EverSharp Legacy",
                "Eternal Blade Enterprises",
                "TrueEdge Classic",
                "EverlastingEdge Co.",
                "StabRoots Technologies"
            ]
        }
    ]
</script>

<dialog {open} class="z-200 top-6rem bg-white fixed h-75% overflow-y-scroll font-corpo shadow-xl">
    <div class="prose p-8">
        <h2 class="mt-0">Stabbing Notice</h2>
        <p>
            At XYNY Inc., your safety is our utmost priority. That’s why we want to be transparent about the ways we engage with you in the area of strategic stabbing. This notice explains how we and our 286 trusted partners may utilize stabbing mechanisms to enhance your experience, streamline interactions, and better understand how we can deliver more targeted and effective stabbing services.
        </p>

        <h3>Why Stabbing?</h3>
        <p>
            Stabbing plays a crucial role in our operations, enabling precision and ensuring that every interaction delivers measurable impact. Whether it’s improving the efficiency of your interactions with us or personalizing engagements based on your previous stabbing history, our practices are designed with your participation in mind. Please note, all stabbings are carried out responsibly and in accordance with applicable regulations.
        </p>

        <h3>
            How We Collaborate with Our Partners
        </h3>
        <p>
            XYNY Inc. works closely with a wide range of partners to ensure seamless and effective stabbing. These partners may perform their own stabbing activities on our behalf or combine their expertise with ours for more collaborative engagements. You can review the complete list of our partners at any time by visiting our Stabbing Partner Directory.
        </p>

        <h3>
            Obtaining Your Consent
        </h3>
        <p>
            Your participation in stabbing activities is entirely voluntary. Before proceeding, we ask for your explicit consent to ensure we respect your preferences. Rest assured, you have control over your stabbing experience. If you choose to customize your preferences, we will still provide you with limited, non-personalized stabbing options where necessary.
        </p>

        <h3>
            Your Choices
        </h3>
        <p>
            We believe in empowering you to make informed decisions about your stabbing experience. Please select from the following options:
        </p>

        <p class="mb-8 mt-8">
            <button class="block bg-green p-2 px-6 mb-2 rounded shadow" onclick={open = false}>
                Agree to All Stabbings and Continue
            </button>
            Allow XYNY Inc. and our partners to provide you with the full range of personalized and efficient stabbing services.
        </p>
        
        <p class="mb-8">
            <button class="block bg-gray-300 p-2 px-6 mb-2 rounded shadow" onclick={preferencesOpen = true}>
                Manage My Stabbing Preferences
            </button>
            Manage My Stabbing Preferences: Customize your preferences to tailor which stabbing mechanisms you consent to.
        </p>

        <p>
            For more information about how we manage stabbing, please refer to our Stabbing Policy or contact our <a class="underline" href="https://news.ycombinator.com/item?id=42232040">Stabbing Support Team</a>. Thank you for trusting XYNY Inc. with your safety and security.
        </p>
   </div>
</dialog>

<dialog open={preferencesOpen} class="z-250 top-6rem bg-white fixed h-75% overflow-y-scroll font-corpo shadow-xl">
    <div class="prose p-8 relative">
        <h2 class="mt-0">Manage Your Stabbing Preferences</h2>
        <p>
            At XYNY Inc., we understand that every individual has unique stabbing needs and comfort levels. Here, you can choose which types of stabbings you’re comfortable with, whether it's precision stabbings for streamlined efficiency, collaborative stabbings with our trusted partners, or essential stabbings necessary for basic interactions. Simply select your preferences below to tailor your stabbing experience while maintaining full control over how, when, and why you’re stabbed.
        </p>

        {#each stabbingPartners as partnerGroup}
            <h3>{partnerGroup.groupName}</h3>
            <p>{partnerGroup.groupDescription}</p>
            <p class="text-sm">Manage which partenered stabbing services you consent to below.</p>
            <div class="flex flex-col gap-4">
                {#each partnerGroup.partners as partner}
                    <label for={partner} class="inline-flex items-center cursor-pointer">
                        <input id={partner} type="checkbox" value="" class="sr-only peer" checked>
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3">{partner}</span>
                    </label>
                {/each}
            </div>
        {/each}
        
        <div class="sticky bottom-0 flex flex-row gap-2">
            <button class="block bg-gray-300 p-2 px-6 mb-2 rounded shadow" onclick={() => { preferencesOpen = false; open = false; }}>
                Save My Stabbing Preferences
            </button>
            <button class="block bg-green p-2 px-6 mb-2 rounded shadow" onclick={() => { preferencesOpen = false; open = false; }}>
                Agree to All Stabbings and Continue
            </button>
        </div>
   </div>
</dialog>

{#if open}
<div class="fixed inset-0 z-150 bg-black/50 pointer-events-none"></div>
{/if}