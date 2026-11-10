const p = (t) => `<p>${t}</p>`;
const h2 = (t) => `<h2>${t}</h2>`;
const bq = (t) => `<blockquote><p>${t}</p></blockquote>`;
const li = (t) => `<li>${t}</li>`;
const ul = (...items) => `<ul>${items.map(li).join("\n          ")}</ul>`;

export const ARTICLES = [
  {
    file: "parasite-review.html",
    section: "Film",
    kicker: "The rewatch",
    h1: "Seven years on, Parasite is still a film about the stairs",
    desc:
      "Bong Joon-ho's Palme d'Or winner is remembered for its twist. The real engine is architecture: who walks up, who walks down, and who never leaves the basement.",
    stand:
      "Bong Joon-ho's Palme d'Or winner is remembered for its twist. The real engine is architecture: who walks up, who walks down, and who never leaves the basement.",
    byline: "Mara Ellison",
    date: "11 November 2026",
    iso: "2026-11-11",
    read: "8 min read",
    art: { cls: "art--navy", kicker: "The rewatch", title: "Parasite", note: "Bong Joon-ho · 2019" },
    score: "5 / 5",
    tags: ["Bong Joon-ho", "2019", "Best Picture", "Korean cinema"],
    body: [
      p(
        "There is a moment early in <em>Parasite</em> when Kim Ki-woo walks up a hill to the Park house for the first time. The camera does not comment on it. It does not need to. The film has already shown us the half-basement where his family lives, the window at street level, the drunk man who urinates outside it. By the time he reaches the gate, the audience has learned the film's real subject. Not money. Altitude."
      ),
      p(
        "Seven years after it became the first non-English-language film to win Best Picture, and the first Korean film to take the Palme d'Or, <em>Parasite</em> is usually described as a thriller with a twist. That description is accurate and entirely beside the point. The twist is a hinge. The door it opens was built in the first scene."
      ),
      h2("A house built as a diagram"),
      p(
        "Bong Joon-ho and production designer Lee Ha-jun built the Park house as a set, and it shows in the best way. The living room's glass wall, the lawn, the staircase that climbs to the bedrooms and the other staircase that descends, eventually, to a bunker: the house is a cross-section of a society that believes itself to be open plan."
      ),
      p(
        "Every character is placed on that diagram. The Kims arrive from below and move upward, one rehearsal at a time, until they are drinking the Parks' whisky in the Parks' living room. The Parks move downward only when the script requires it, and when they do, they hold their noses. The film's most famous line, about a plan that cannot fail, is delivered at the bottom of a staircase."
      ),
      bq("Class is not a theme in this film. It is the floor plan."),
      h2("The twist is not the point"),
      p(
        "When the bunker finally opens, the film changes register: comedy of manners becomes something closer to horror. Audiences remember the reveal because it arrives with a physical shock. What makes it durable is the way it reorganises everything before it. The house was never a home. It was a load-bearing structure with a man living under the floorboards, and the family above had learned not to hear him."
      ),
      p(
        "Bong's script is ruthless about the small mechanics of that arrangement: the housekeeper who knows the code, the CCTV, the basement that floods first when it rains because it is lowest. The film does not need a speech about inequality. It has plumbing."
      ),
      h2("The plan that cannot fail"),
      p(
        "The last act is often read as a tragedy about a family that gets greedy. It is more precise than that. The Kims are not punished for wanting a house. They are punished for believing the house could be entered without becoming part of its architecture. Ki-taek's final act is not a plan at all. It is the collapse of the idea that a plan was ever available."
      ),
      p(
        "The epilogue, with its letter and its impossible mortgage, is the film's coldest joke: the only route out of the basement is a fantasy about buying the building. Seven years on, that joke has not aged. If anything, the staircase has got longer."
      ),
      p(
        "It remains a near-perfect piece of construction: funny for an hour, unbearable for twenty minutes, and then quiet in a way that follows you out of the room. The performances are exact, particularly Song Kang-ho's, which carries the whole film in a face that keeps deciding not to say something."
      )
    ]
  },
  {
    file: "in-the-mood-for-love-review.html",
    section: "Film",
    kicker: "The rewatch",
    h1: "In the Mood for Love is a film about the space between two people",
    desc:
      "Wong Kar-wai's 2000 romance never shows the affair. Twenty-six years on, that restraint is the whole point.",
    stand:
      "Wong Kar-wai's 2000 romance never shows the affair. Twenty-six years on, that restraint is the whole point.",
    byline: "Nadia Okonjo",
    date: "8 November 2026",
    iso: "2026-11-08",
    read: "7 min read",
    art: { cls: "art--red", kicker: "The rewatch", title: "In the Mood for Love", note: "Wong Kar-wai · 2000" },
    score: "5 / 5",
    tags: ["Wong Kar-wai", "2000", "Hong Kong", "Christopher Doyle"],
    body: [
      p(
        "Two people rent rooms in neighbouring flats in Hong Kong in 1962. Their spouses are having an affair. They find out, compare notes, and then spend the rest of the film not having one of their own. That is the plot of <em>In the Mood for Love</em>, and it is almost all the plot there is."
      ),
      p(
        "Wong Kar-wai shot the film without a finished script, and it shows in the best way: scenes repeat, music returns, the same corridor is walked down again and again. What emerges is not a story that advances so much as a mood that tightens. Twenty-six years on, it remains the most precise film ever made about restraint, and the least interested in rewarding it."
      ),
      h2("The repetition is the plot"),
      p(
        "Su Li-zhen, played by Maggie Cheung, works as a secretary and wears a different qipao in nearly every scene. Chow Mo-wan, played by Tony Leung, writes serials for a newspaper. They pass each other on the stairs. They eat noodles at the same stall. Shigeru Umebayashi's theme returns so often that it stops being score and becomes architecture: the sound of a building where something is about to happen and does not."
      ),
      p(
        "The repetition does the work a sex scene would normally do in a lesser film. Every return to the same stairwell is a decision not made. Every shared umbrella is a line crossed and then politely uncrossed. By the time the two rehearse a confrontation for their spouses, the rehearsal has become the relationship, and the film has quietly shown you how intimacy works when it has nowhere to go."
      ),
      bq("The film is built out of scenes that almost happen."),
      h2("What the camera refuses"),
      p(
        "Christopher Doyle's cinematography keeps putting objects between the camera and the actors: doorframes, curtains, mirrors, the backs of chairs. We watch them through things. The effect is not coy. It is structural. These are people who have agreed to live inside a frame, and the camera has agreed to respect it."
      ),
      p(
        "Wong's colour sense does the rest. The reds are saturated to the point of heat; the greens are sickly and beautiful; the narrow rooms feel over-warm. The film is almost never cool, even when it is at its most restrained. That tension, between a hot palette and cold behaviour, is the entire engine."
      ),
      h2("The ending that refuses to resolve"),
      p(
        "The final movement takes Chow to Angkor Wat, where he whispers something into a hole in a wall and walks away. We do not hear it. The film has spent two hours teaching us to read what is withheld, and then withholds the last thing."
      ),
      p(
        "It should be infuriating. It is instead the only ending the film could have. A confession heard would turn the story into an affair. A confession buried keeps it a film about the cost of not having one."
      ),
      p(
        "This is why <em>In the Mood for Love</em> rewards rewatching more than almost any romance of its era. The first time, you wait for them to get together. The second time, you notice that they never had a chance, and that the film told you so in the first ten minutes, in a corridor, with a bowl of noodles."
      )
    ]
  },
  {
    file: "spirited-away-review.html",
    section: "Film",
    kicker: "Anniversary",
    h1: "Spirited Away at 25 is still the best film about starting a job",
    desc:
      "Miyazaki's bathhouse is a workplace comedy, a folk tale and a lesson in how names get taken. A quarter of a century on, it has not dated a day.",
    stand:
      "Miyazaki's bathhouse is a workplace comedy, a folk tale and a lesson in how names get taken. A quarter of a century on, it has not dated a day.",
    byline: "Dev Shah",
    date: "6 November 2026",
    iso: "2026-11-06",
    read: "7 min read",
    art: { cls: "art--green", kicker: "Anniversary", title: "Spirited Away", note: "Hayao Miyazaki · 2001" },
    score: "5 / 5",
    tags: ["Hayao Miyazaki", "Studio Ghibli", "2001", "Animation"],
    body: [
      p(
        "A ten-year-old girl is moving to a new town, which is already the worst thing that can happen to a ten-year-old girl. Her parents take a wrong turn, eat food that is not theirs, and turn into pigs. By the time Chihiro reaches the bathhouse, she has lost her name, her clothes and her parents, in that order."
      ),
      p(
        "<em>Spirited Away</em> won the Golden Bear in Berlin and the first Best Animated Feature Oscar, and twenty-five years later it is still the film people hand to a child who is about to start at a new school. That is not because it is gentle. It is because it is honest about what work feels like."
      ),
      h2("The bathhouse is a workplace"),
      p(
        "Miyazaki's bathhouse is not a magical palace. It is a business: shifts, uniforms, a boiler room, a manager who takes a cut, customers who arrive filthy and leave clean. Chihiro's first task is not to defeat anyone. It is to get hired, learn the routine and stop crying long enough to be useful."
      ),
      p(
        "Yubaba steals her name and gives her a shorter one. Sen is easier to manage than Chihiro. Anyone who has started a job and been handed a badge with a shortened version of themselves on it will recognise the transaction immediately. The film understands that employment is a trade in identity, and that the trade is usually worth it and never free."
      ),
      bq("The magic is not the point. The shift is the point."),
      h2("No-Face and the loneliness of the customer"),
      p(
        "No-Face is the film's strangest creation and its saddest. He is welcomed into the bathhouse because he has gold, and the staff perform an enthusiasm they do not feel. He eats them. The sequence is a satire of service work that has never needed updating: the customer is not a monster, exactly. He is a person with nothing to do and unlimited money, and the building is designed to keep him happy until it collapses."
      ),
      p(
        "The train that follows is the film's most beautiful passage, and almost nothing happens in it. Chihiro sits. The scenery goes past. A shadow gets off at a stop. It is the closest animation has come to the feeling of being tired on public transport after a long day."
      ),
      h2("Growing up without a lesson"),
      p(
        "Chihiro does not become brave. She becomes competent, which is more useful. She learns to ask for help, to remember her name, to run up a flight of stairs without stopping. The film refuses to give her a speech. It gives her a job and a train ticket."
      ),
      p(
        "Twenty-five years on, the animation still looks expensive in a way that computer-generated films rarely do: water that behaves like water, food with actual weight, a boiler room dense with pipes. The hand-drawn detail is not nostalgia. It is labour you can see."
      ),
      p(
        "What has aged best is the ending. Chihiro leaves, and the tunnel behind her is ordinary again. There is no medal, no ceremony, no one to tell her what she learned. She just has to walk back to the car."
      )
    ]
  },
  {
    file: "mad-max-fury-road-review.html",
    section: "Film",
    kicker: "The rewatch",
    h1: "Mad Max: Fury Road is still the cleanest action film of the century",
    desc:
      "George Miller's chase runs for two hours and never wastes a shot. Eleven years on, the practical weight of it is the argument.",
    stand:
      "George Miller's chase runs for two hours and never wastes a shot. Eleven years on, the practical weight of it is the argument.",
    byline: "Jonas Reed",
    date: "4 November 2026",
    iso: "2026-11-04",
    read: "7 min read",
    art: { cls: "art--blue", kicker: "The rewatch", title: "Fury Road", note: "George Miller · 2015" },
    score: "5 / 5",
    tags: ["George Miller", "2015", "Action", "Charlize Theron"],
    body: [
      p(
        "There is a school of action filmmaking that treats the frame as a place to put noise. <em>Mad Max: Fury Road</em> treats it as a place to put information. Every cut tells you where the vehicles are, how fast they are going and who is in danger. After two hours of it, you can describe the geography of a desert you have never visited."
      ),
      p(
        "George Miller was in his late sixties when he made it, and the film has the energy of someone who has been waiting decades to show you a trick. Eleven years on, it still plays like a correction to the rest of the blockbuster decade."
      ),
      h2("The story is the geography"),
      p(
        "Furiosa drives off the road. Max is dragged into the chase. The chase turns around. That is the plot, and it is enough, because the film keeps changing what the chase means: escape, then pursuit, then return. Miller and editor Margaret Sixel cut the whole thing so tightly that a two-hour film feels like a single movement."
      ),
      p(
        "The clarity is the craft. When a pole drops a man onto a moving car, you can see the pole, the man, the car and the ground in the same shot. When the rig flips, the film has already taught you which side the fuel tank is on. There are no cheat cuts. There is no confusion sold as energy."
      ),
      bq("Clarity is a form of respect. The film never pretends you cannot follow it."),
      h2("Practical weight"),
      p(
        "The cars were built. The stunts were performed. The storm is digital, and the canyon is digital, and nobody minds, because the weight in the frame is real. Charlize Theron's Furiosa has grease under her nails and a mechanical arm that looks like it was salvaged rather than designed."
      ),
      p(
        "Six Oscars, including editing, production design and both sound categories, is the Academy rewarding the least glamorous parts of the job. It is also the correct list. The film is a machine that works because every department agreed on what the machine was for."
      ),
      h2("Furiosa is the engine"),
      p(
        "Tom Hardy's Max is a passenger for long stretches, which is the joke: the franchise's title character has been demoted to witness. The film belongs to Theron, who plays a woman with a plan and a truck, and who never once asks to be liked."
      ),
      p(
        "That choice is why the film still feels modern while its imitators have dated. It is not gritty for the sake of grit. It is a story about extraction: who owns water, who owns bodies, who gets to leave. The chrome and the flame-thrower guitar are decoration on top of an argument."
      ),
      p(
        "The Black and Chrome edition, which strips the colour out, is worth one viewing as an experiment. It confirms how much of the film's meaning is carried by colour, and how little it needs to be understood."
      )
    ]
  },
  {
    file: "aftersun-review.html",
    section: "Film",
    kicker: "The rewatch",
    h1: "Aftersun turns a holiday video into a ghost story",
    desc:
      "Charlotte Wells's debut is built from camcorder footage, a Turkish resort and everything a child does not notice at the time.",
    stand:
      "Charlotte Wells's debut is built from camcorder footage, a Turkish resort and everything a child does not notice at the time.",
    byline: "Mara Ellison",
    date: "2 November 2026",
    iso: "2026-11-02",
    read: "6 min read",
    art: { cls: "art--sand", kicker: "The rewatch", title: "Aftersun", note: "Charlotte Wells · 2022" },
    score: "4.5 / 5",
    tags: ["Charlotte Wells", "2022", "Paul Mescal", "Debut"],
    body: [
      p(
        "A father and his eleven-year-old daughter go to a resort in Turkey. They swim, they eat, they take a bus tour. He teaches her to scuba dive. She films things with a camcorder. Nothing happens, in the way that holidays do not happen, and everything happens, in the way that holidays do."
      ),
      p(
        "Charlotte Wells's debut feature is one of the few films that understands memory as an editing problem. The present-tense holiday is warm and slightly boring. The frame around it, supplied by an adult Sophie looking back at the tapes, is colder and much sadder. The film cuts between the two without warning, and the gaps do the acting."
      ),
      h2("What the child cannot see"),
      p(
        "Paul Mescal plays Calum, and the performance is a study in performed cheerfulness. He is funny, generous and attentive. He is also, in small unremarked moments, in serious trouble: a wrist, a walk into the sea, a conversation with a stranger that the camera declines to hear."
      ),
      p(
        "Sophie does not notice, because she is eleven, and the film refuses to blame her for it. That refusal is the whole ethical position of the movie. Children are not detectives. They are passengers."
      ),
      bq("The camcorder is not a memory. It is the evidence that something was missed."),
      h2("The resort as a stage"),
      p(
        "The hotel is all inclusive and slightly shabby: a pool, a bar, a karaoke night, a bus to a mud bath. Wells shoots it without condescension. It is not a symbol of anything. It is just where the family could afford to go, and the film's affection for its carpets and its towels is part of why the sadness lands."
      ),
      p(
        "The final sequence, set to Queen and David Bowie's Under Pressure, cuts between the holiday and an adult Sophie's memory of it, and it is the best use of a pop song in a recent film. The song is not ironic. It is not nostalgic. It is the sound of trying to hold someone who is already going."
      ),
      h2("A small film with a long shadow"),
      p(
        "At 96 minutes, <em>Aftersun</em> is a reminder that a feature does not need a plot to be a story. It needs a point of view and the discipline to withhold it until the last possible moment. Wells has both."
      )
    ]
  },
  {
    file: "heat-review.html",
    section: "Film",
    kicker: "The rewatch",
    h1: "Heat is a film about professionalism, not crime",
    desc:
      "Michael Mann's 1995 thriller is remembered for the diner scene. Its real subject is the cost of doing a job well.",
    stand:
      "Michael Mann's 1995 thriller is remembered for the diner scene. Its real subject is the cost of doing a job well.",
    byline: "Jonas Reed",
    date: "30 October 2026",
    iso: "2026-10-30",
    read: "6 min read",
    art: { cls: "art--black", kicker: "The rewatch", title: "Heat", note: "Michael Mann · 1995" },
    score: "4.5 / 5",
    tags: ["Michael Mann", "1995", "Crime", "Los Angeles"],
    body: [
      p(
        "Two men sit in a diner and talk about their work. One is a thief, the other is a detective. They are the best at what they do, they respect each other for it, and they both know that one of them will have to kill the other. The scene runs for a long time and contains no plot. It is the centre of the film."
      ),
      p(
        "Michael Mann's <em>Heat</em> is usually filed as a crime thriller, and it is a great one: the armoured car robbery, the shootout on Flower Street, the airport chase. But its subject is labour. Everyone in it is defined by what they do, and everyone pays for it at home."
      ),
      h2("The job is the character"),
      p(
        "Neil McCauley, played by Robert De Niro, has a rule: never let anything into your life you cannot walk away from in thirty seconds. Vincent Hanna, played by Al Pacino, has the opposite problem. He cannot walk away from anything, which is why his third marriage is failing and why he is good at his job."
      ),
      p(
        "Mann shoots Los Angeles as a city of work: diners at four in the morning, warehouses, hospitals, freeways at night. The famous blue palette is not cool for the sake of cool. It is the colour of a city that never quite turns the lights off."
      ),
      bq("Do not let yourself get attached to anything you are not willing to walk out on in thirty seconds."),
      h2("The shootout changed the grammar"),
      p(
        "The bank robbery sequence is still the benchmark. The sound is enormous and oddly dry. The police fire from behind cars and hit nothing; the robbers move with a plan. Mann had his actors trained by British special forces and it shows in the way they reload."
      ),
      p(
        "Before <em>Heat</em>, screen gunfire was mostly punctuation. After it, films had to account for the noise, the panic and the fact that a street full of people would be terrified. The sequence is also the moment the film's two professionals finally share a frame without speaking."
      ),
      h2("The ending is a work dispute"),
      p(
        "The final chase across the airport tarmac is often read as tragedy. It is closer to a performance review. Hanna cannot let McCauley go because letting him go would mean admitting the job is optional. McCauley cannot surrender because surrender would mean he was never the professional he said he was."
      ),
      p(
        "They hold hands at the end, which is either the most sentimental thing Mann has ever shot or the least. Either way, it is two men acknowledging that they were the only ones who understood each other's hours."
      )
    ]
  },
  {
    file: "the-ninety-minute-film.html",
    section: "Film",
    kicker: "Feature",
    h1: "The ninety-minute film is quietly coming back",
    desc:
      "For twenty years the running time crept upward. A new crop of short features suggests the two-hour default was never a rule.",
    stand:
      "For twenty years the running time crept upward. A new crop of short features suggests the two-hour default was never a rule.",
    byline: "Dev Shah",
    date: "7 November 2026",
    iso: "2026-11-07",
    read: "8 min read",
    art: { cls: "art--cream", kicker: "Feature", title: "89 minutes", note: "On running time" },
    tags: ["Running time", "Streaming", "Economics"],
    body: [
      p(
        "Somewhere in the last two decades, the feature film settled into a comfortable two hours and ten minutes. Franchises went longer. Prestige dramas went longer. Even comedies began to arrive with a second act that felt like a contractual obligation. The running time was not a decision anyone made. It was a climate."
      ),
      p(
        "That climate is changing, at the edges. A run of recent features has arrived under a hundred minutes and felt, if anything, more complete than their longer neighbours. Rye Lane runs 82 minutes. Lovers Rock runs 68. Coherence runs 89. None of them feels truncated. All of them feel designed."
      ),
      h2("Why the two-hour default exists"),
      p(
        "It is not an artistic standard. It is a set of commercial habits. Cinemas schedule in blocks. Awards bodies have a soft sense of what a serious film looks like. Streaming platforms paid by engagement once had an incentive to let a film run long, because a longer film means more minutes watched."
      ),
      p(
        "Those incentives are weakening. Completion rate matters more than total minutes to a subscription service, because a film people finish is a film they recommend. A tight ninety minutes finishes. A flabby two hours and twenty gets abandoned in the second act, and the platform sees it."
      ),
      h2("The short feature is not a lesser film"),
      p(
        "The prejudice runs deep: short means slight. But look at what the short feature actually does. <em>Before Sunrise</em> (101 minutes) is almost entirely conversation and would collapse at two and a half hours. <em>Coherence</em> (89) uses its brevity as a pressure device; the characters have no time to be reasonable, which is the point."
      ),
      p(
        "The short feature is a form with its own grammar. It cuts the subplot. It trusts a single location. It ends on the image rather than the explanation. The best of them feel like a short story rather than a truncated novel, and the difference is craft, not length."
      ),
      bq("A film should be as long as its idea, and not one scene longer."),
      h2("What gets cut first"),
      p(
        "When a film is trimmed, the first thing to go is usually the thing that made it distinctive: the long drive, the meal, the scene where nobody advances the plot. That is a loss, but it is not the same loss as cutting a character. The middle of a film is where atmosphere lives, and atmosphere is expensive."
      ),
      p(
        "The interesting thing about the new short features is that they have not cut atmosphere. They have cut exposition. They start in the middle of a relationship and trust you to catch up, which is what short fiction has always done."
      ),
      h2("The economics of a tighter cut"),
      p(
        "There is a boring, practical reason studios should like this trend. A shorter film can be scheduled more times a day. It costs less to finish. It travels better across territories and formats. The two-hour default was never protecting the art. It was protecting a distribution pattern that is itself being renegotiated."
      ),
      p(
        "None of this means every film should be ninety minutes. <em>Heat</em> earns its 170. The point is that the number should be an argument, not a default. The best news about the current crop is not that films are shorter. It is that somebody is finally asking the question."
      )
    ]
  },
  {
    file: "how-a-colour-grade-works.html",
    section: "Craft",
    kicker: "Craft",
    h1: "What a colourist actually does all day",
    desc:
      "A grade is not a filter. It is the last chance to decide where the audience looks, and it starts long before the edit is locked.",
    stand:
      "A grade is not a filter. It is the last chance to decide where the audience looks, and it starts long before the edit is locked.",
    byline: "Nadia Okonjo",
    date: "5 November 2026",
    iso: "2026-11-05",
    read: "9 min read",
    art: { cls: "art--green", kicker: "Craft", title: "The grade", note: "Post-production" },
    tags: ["Cinematography", "Post-production", "Craft"],
    body: [
      p(
        "The credits call it colour, which makes it sound like paint. In practice a colourist spends most of a day doing something closer to traffic control: deciding which part of the frame the eye should reach first, and making sure it can get there without noticing the effort."
      ),
      p(
        "A grade is built in passes. First the balance: exposure, white point, contrast, so that every shot in a scene sits in the same world. Then the look: a curve, a saturation choice, a shift in the shadows. Then the detail work, shot by shot, which is where most of the hours go."
      ),
      h2("The look is decided on set"),
      p(
        "By the time footage reaches a grading suite, most of the decisions are already made. Lenses, filtration, lighting colour and exposure all narrow the range of what the grade can be. A cinematographer who lights warm and exposes bright is not going to be talked into a cold, crushed image afterwards. The grade polishes an argument; it does not invent one."
      ),
      p(
        "This is why the phrase fix it in post is a joke among people who work in post. You can rescue a shot. You cannot rescue a decision."
      ),
      h2("Teal and orange, and why it will not die"),
      p(
        "The complementary grade, warm skin against cool shadow, persists because it works. Skin sits in a narrow band of hues that audiences read as healthy, and pushing the background toward blue or green separates the face from the room. It is not a conspiracy. It is a very reliable trick that became a house style, and then a cliche."
      ),
      p(
        "The cliche is not the colours. It is the uniformity. A film that grades every location to the same orange-and-teal template has stopped using colour to say anything. The interesting grades are the ones that break their own rule for a scene, and let one room go green or one night go yellow."
      ),
      bq("Colour is not decoration. It is a way of telling the audience where to stand."),
      h2("What HDR changed"),
      p(
        "High dynamic range gave colourists room in the highlights and shadows that used to be simply clipped. It also created a new problem: two versions of the same film, one for a bright living room and one for a phone on a train. A good grade has to survive both without turning into mud on one of them."
      ),
      p(
        "The practical answer is a trim pass: the same grade, adjusted per delivery. It is unglamorous work, and it is the reason a film can look correct on a cinema screen and still legible on a laptop."
      ),
      h2("The grade you do not notice"),
      p(
        "The best compliment a colourist can receive is that the film looks like it was shot that way. The audience should feel the weather, not the curve. When a grade calls attention to itself, it is usually because it is doing too much in one place and not enough in another."
      ),
      p(
        "So the next time a film feels expensive without an obvious reason, look at the shadows. If they are still readable, and the skin still looks like skin, somebody spent three weeks making that look inevitable."
      )
    ]
  },
  {
    file: "the-six-episode-season.html",
    section: "TV",
    kicker: "Television",
    h1: "Why six episodes became the prestige default",
    desc:
      "The ten-episode season was a streaming habit. The shorter order is a better fit for the way drama is now written, cast and paid for.",
    stand:
      "The ten-episode season was a streaming habit. The shorter order is a better fit for the way drama is now written, cast and paid for.",
    byline: "Mara Ellison",
    date: "9 November 2026",
    iso: "2026-11-09",
    read: "7 min read",
    art: { cls: "art--black", kicker: "Television", title: "Six hours", note: "On season length" },
    tags: ["Television", "Streaming", "Writing"],
    body: [
      p(
        "For a while, the streaming drama settled on ten episodes. It was a neat number: long enough to feel like a season, short enough to shoot in a year, divisible by two for a mid-season break that no longer existed. Then the orders started getting shorter, and the shows started getting better."
      ),
      p(
        "Six is now the number you hear most often in a pitch. Five is not unusual. Seven happens. The change is partly financial and partly artistic, and the two are difficult to separate."
      ),
      h2("The economics of a shorter order"),
      p(
        "A season is priced per episode, but the fixed costs, sets, cast, crew, do not scale down with the count. A six-episode order concentrates the budget on the episodes that exist. It also fits the availability of a lead actor with a film career, which is increasingly the only kind of actor a prestige drama can cast."
      ),
      p(
        "There is a writing consequence too. A ten-episode room has to invent material to fill the middle. A six-episode room has to solve the story. The second job is harder and produces better television."
      ),
      h2("The five-episode exception"),
      p(
        "<em>Chernobyl</em> told its story in five. <em>Mare of Easttown</em> took seven. Neither felt short. Both used the constraint the way a short story uses a single location: as a reason to be precise."
      ),
      p(
        "The counterargument is the hangout show, the comedy or drama that earns its length by letting you live with the characters. That form is real, and it does not survive a six-episode order. The mistake is treating one shape as universally better. The mistake in the other direction was treating ten as a law."
      ),
      bq("The season should be as long as the story, and the budget should follow the season."),
      h2("What a shorter season changes"),
      p(
        "It removes the episode that exists to reset the board. It removes the B-plot that was cast before the script was finished. It makes the finale feel like an ending rather than a pause. It also raises the price of a bad episode: with ten, one dud is survivable; with six, it is a sixth of the show."
      ),
      p(
        "That pressure is healthy. It pushes writers to know the ending before they start, which is the single biggest difference between a series that lands and one that explains itself in the final hour."
      ),
      h2("What we lose"),
      p(
        "We lose the pleasure of a slow middle. We lose the minor character who becomes a favourite because the actor was funny in week four. We lose the sense that a show is a place you can return to rather than a story you finish."
      ),
      p(
        "Those are real losses, and the best short seasons find ways to keep a little of them: a bottle episode, a detour, a scene that exists only because it is good. The form is not fixed. It is being negotiated, and that is the most interesting thing about television right now."
      )
    ]
  },
  {
    file: "succession-and-the-exit.html",
    section: "TV",
    kicker: "Television",
    h1: "Succession understood that the exit is the hardest scene",
    desc:
      "Three years after the finale, the show's real achievement is how carefully it staged leaving: boardrooms, cars, and the moment a family stops being a company.",
    stand:
      "Three years after the finale, the show's real achievement is how carefully it staged leaving: boardrooms, cars, and the moment a family stops being a company.",
    byline: "Dev Shah",
    date: "1 November 2026",
    iso: "2026-11-01",
    read: "8 min read",
    art: { cls: "art--navy", kicker: "Television", title: "Succession", note: "HBO · 2018–2023" },
    tags: ["HBO", "Succession", "Jesse Armstrong", "Finale"],
    body: [
      p(
        "This piece discusses the ending of <em>Succession</em>. If you have not finished it, come back later."
      ),
      p(
        "Most dramas about power end with a coronation. <em>Succession</em> ended with a paperwork problem. The board votes. The family loses. Tom, of all people, gets the chair. Kendall walks out of a building and sits by the water. There is no speech, no gunshot, no final twist of the knife. Just a transaction that has been coming for four seasons."
      ),
      p(
        "Three years on, the finale looks less like a surprise and more like the only honest ending the show had available. It had spent its whole run arguing that the company was the family and the family was the company. When the company is sold, there is nothing left to inherit."
      ),
      h2("The show was always about leaving"),
      p(
        "From the first episode, everyone wants out. Kendall wants to be Logan. Shiv wants to be Logan. Roman wants Logan to love him. Connor wants Logan to notice him. Logan wants to die at the desk. Nobody wants to leave, and everybody is trying to."
      ),
      p(
        "The genius of Jesse Armstrong's writing is that he made the boardroom scenes as intimate as the family scenes. A vote is a family argument with minutes. A merger is a divorce with lawyers. The show never let you forget that the people deciding the future of a media empire were the same people who could not decide where to have Thanksgiving."
      ),
      bq("The tragedy is not that they lost the company. It is that they were never anything else."),
      h2("The car and the water"),
      p(
        "The final sequence is a masterclass in withholding. Kendall does not get a monologue. He gets a car, a bodyguard and a view. The show has spent years teaching us to read his face in rooms; now it gives him no room, and the face is enough."
      ),
      p(
        "The earlier scene in the glass office, with the siblings arguing over who should be the one to sign, is the actual climax. It is shot like a horror film: three people in a fishbowl, a city behind them, and a decision that none of them can make without becoming their father."
      ),
      h2("Why it still holds up"),
      p(
        "Rewatching the series now, the jokes land differently. The insults are still funny, but the desperation underneath them is louder. Tom's arc, which looked like a running gag for two seasons, turns out to have been the most carefully built story in the show: the man who had no name in the family and therefore had nothing to lose."
      ),
      p(
        "And the show's formal restraint looks braver in hindsight. No flashbacks, no dream sequences, no narration. Just rooms, phones and people who cannot say the thing. It trusted the audience to hear what was missing, and the audience did."
      ),
      p(
        "The final image is not defeat. It is a man realising that the thing he was going to inherit was never his, and that the only exit was the one he could not take: walking away before it was taken from him."
      )
    ]
  },
  {
    file: "the-bear-fishes.html",
    section: "TV",
    kicker: "Television",
    h1: "The Bear's dinner episode is a masterclass in pressure",
    desc:
      "One house, one table, a dozen guests and a slow build to a plate on the floor. The show's most famous hour is also its most disciplined.",
    stand:
      "One house, one table, a dozen guests and a slow build to a plate on the floor. The show's most famous hour is also its most disciplined.",
    byline: "Nadia Okonjo",
    date: "28 October 2026",
    iso: "2026-10-28",
    read: "6 min read",
    art: { cls: "art--red", kicker: "Television", title: "Fishes", note: "The Bear · S2E6" },
    tags: ["The Bear", "Television", "Directing"],
    body: [
      p(
        "The sixth episode of the second season of <em>The Bear</em> takes place at a family dinner. There is a table, a kitchen, a door, and a growing sense that something is about to go wrong. By the end, a plate is on the floor and nobody has raised their voice above a certain register, which is somehow worse."
      ),
      p(
        "Television often treats tension as volume. This episode treats it as choreography: who is standing, who is seated, who is in the kitchen and who is not allowed in. The camera stays close and never settles. The room fills up with people and the film gets tighter."
      ),
      h2("A dinner as a pressure cooker"),
      p(
        "The episode is built around a guest list: relatives, a family friend, a partner trying very hard to be liked. Each arrival raises the pressure a little. The writing gives everyone a reason to be brittle and no one a reason to leave, which is the definition of a family dinner."
      ),
      p(
        "The performances are the engine. Jamie Lee Curtis and Bob Odenkirk arrive with the specific energy of people who have been in this argument before and know exactly where the knives are. The dialogue overlaps. The sound mix lets you miss lines, which is the right choice and a brave one."
      ),
      bq("Nothing in the episode is improvised. It just feels that way, which is harder."),
      h2("The plate"),
      p(
        "The climax is a plate on the floor, and it works because the episode has spent forty minutes telling you that the plate matters. It is not a symbol. It is dinner. In a show about food, ruining dinner is the most violent act available, and the episode understands that better than any of its characters."
      ),
      p(
        "What follows is the release: the next episode, <em>Forks</em>, sends one character away from the family and into a restaurant kitchen where the same pressure is applied in a completely different register. The two episodes are a diptych about work as an escape and work as a trap."
      ),
      h2("Why it holds up"),
      p(
        "Rewatching it, the craft is more obvious than the drama. The blocking is precise. The edits land on reactions rather than lines. The episode trusts the audience to keep track of a dozen people in one house, and it earns that trust by never cutting away from the person who is about to say the worst thing."
      ),
      p(
        "It is the episode people show to people who do not watch <em>The Bear</em>. That is usually a mistake, because the pressure only works if you know the kitchen it is coming from. But it is also a compliment: this is television that survives being taken out of context."
      )
    ]
  }
];
