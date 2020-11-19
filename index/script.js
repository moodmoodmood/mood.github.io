// array describing the color for each team
// using camel case where the team names include a space
const colors = {
  mercedes: '#00D2BE',
  ferrari: '#DC0000',
  redBull: '#1E41FF',
  renault: '#FFF500',
  racingPoint: '#F596C8',
  alfaRomeo: '#9B0000',
  toroRosso: '#469BFF',
  haas: '#BD9E57',
  mclaren: '#FF8700',
  williams: '#FFFFFF'
}

// array describing the drivers, sorted by position and with a gap describing the distance from the leading driver
const leaderboard = [
  {
    name: 'dop3file',
    team: '',
    gap: 'Leader'
  },
  {
    name: 'Natasha',
    team: '',
    gap: '+6.552s'
  },
  {
    name: 'Renat',
    team: '',
    gap: '+13.744s'
  },
  {
    name: 'maxmaxmax',
    team: '',
    gap: '+27.627s'
  },
  {
    name: 'Анюта',
    team: '',
    gap: '+31.627s'
  },
];

// target the table element in which to add one div for each driver
const main = d3
  .select('table');

// for each driver add one table row
// ! add a class to the row to differentiate the rows from the existing one
// otherwise the select method would target the existing one and include one row less than the required amount
const drivers = main
  .selectAll('tr.driver')
  .data(leaderboard)
  .enter()
  .append('tr')
  .attr('class', 'driver');

// in each row add the information specified by the dataset in td elements
// specify a class to style the elements differently with CSS

// position using the  of the data points
drivers
  .append('td')
  .text((d, i) => i + 1)
  .attr('class', 'position');


// name followed by the team
drivers
  .append('td')
  // include the last name in a separate element to style it differently
  // include the team also in another element for the same reason
  .html (({name, team}) => `${name.split(' ').map((part, index) => index > 0 ? `<strong>${part}</strong>` : `${part}`).join(' ')} <span>${team}</span>`)
  // include a border with the color matching the team
  .style('border-left', ({team}) => {
    // find the color using the string value found in d.team
    // ! if the string value has a space, camelCase the value
    const color = team.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
    return `4px solid ${colors[color]}`;
  })
  .attr('class', 'driver');

// gap from the first driver
drivers
  .append('td')
  .attr('class')
  .append('span')
