function commaListToArray(commaList) {
  let itemArray = commaList.split(',');
  let quotedTerms = [];
  for (let i = 0; i < itemArray.length; i++) {
    quotedTerms.push(itemArray[i].trim());
  }
  return quotedTerms
}

console.log(JSON.stringify(commaListToArray(
  "the business,  in business,  small business,  Big Business,  doing business,  business administration,  business school,  International business,  business community,  business cycle,  business world,  business plan,  business practices,  family business,  business activity,  business enterprise,  business men,  business people,  Business process,  business management,  business processes,  by business,  business cycles,  business district,  business enterprises,  Business development,  business owners,  show business,  business man,  business strategy,  Business manager,  business ethics,  business unit,  business organizations,  business model,  business organization,  business services,  Business sector,  unfinished business,  business card,  business income,  business executives,  business day,  business cards,  business schools,  business expenses,  business conditions,  business hours,  business trip,  Business education,  business studies,  business partner,  business owner,  business needs,  business days,  business practice,  business law,  public business,  business life,  business models,  business relationship,  business plans,  business case,  business firm,  business judgment,  business office,  music business,  business entity,  business systems,  business sense,  business class,  Core business,  business rules,  Business executive,  business suit,  Business relations,  business objectives,  business expense,  business logic,  Risky Business,  business transaction,  business center,  retail business,  business tax,  Business letter,  business system,  business combination,  business economics,  business intelligence,  Business opportunity,  business climate,  personal business,  business trips,  national business,  business deal,  business risk,  Business travel,  oil business,  service business,  business name,  business area"
  ), null, 2));


function formatText(text) {
  let lines = text.split('\n');
  let words = [];
  for (let i = 0; i < lines.length; i++) {
    words.push(lines[i].replace(/\d+\.\s+/, ''));
  }
  return words.join(', ');
}

//print full output
console.log(JSON.stringify(
  commaListToArray(formatText(
    `101. GB plc
    102. government
    103. groups
    104. hire
    105. hospitality
    106. incorporated company
    107. incorporation
    108. Industrial Property
    109. industries
    110. institution
    111. intellectual property
    112. intercourse
    113. interests
    114. investment
    115. jobbery
    116. labour
    117. law firm
    118. lawful day
    119. lawfulness
    120. lawyership
    121. legal
    122. legal entity
    123. life
    124. line
    125. line of work
    126. management
    127. managership
    128. manufacturing
    129. marketing
    130. megacorporation
    131. mercantile
    132. merchantile
    133. microbusiness
    134. minding
    135. monopoly
    136. motion
    137. nonbusiness
    138. occupation
    139. office
    140. office job
    141. office work
    142. operations
    143. ordinary course of business
    144. organ
    145. organisation
    146. organization
    147. organized crime
    148. ownership
    149. partnership
    150. patronage
    151. people
    152. politics
    153. private sector
    154. procedure
    155. procurement
    156. professional
    157. profitable
    158. property
    159. proprietariat
    160. proprietary
    161. province
    162. public body
    163. public limited company
    164. public office
    165. public service
    166. rapporteurship
    167. realty
    168. recordkeeping
    169. retail
    170. sales
    171. service agreement
    172. services
    173. shared service
    174. small business
    175. society
    176. sole proprietorship
    177. staff
    178. stage business
    179. staple
    180. startup
    181. state capitalism
    182. state ownership
    183. state-owned enterprise
    184. tax office
    185. taxation
    186. tourism
    187. town
    188. trade name
    189. trademark
    190. trading estate
    191. traffic
    192. transacts
    193. treaty
    194. trust
    195. U.S. Inc
    196. UK plc
    197. undertakings
    198. union
    199. ventures
    200. warranty
    `
)), null, 2));