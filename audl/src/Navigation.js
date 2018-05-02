import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
    };

    this.search = this.search.bind(this);
  }

  search(e) {
    this.setState({
      searchString: e.target.value,
    });
  }

  render() {
    const { searchString } = this.state;
    const hash = window.location.hash.slice(1);
    const menuItems = [
      { title: 'Getting Started', section: true, path: '/' },
      { title: 'Solutions', section: true },
      { title: 'Default boilerplate' },
      { title: 'Document Managenent', path: '/document-management' },
      { title: 'Traffic Analysis' },

      { title: 'Organisms', section: true, path: '/empty' },
      { title: 'Navigation: top', path: '/empty' },
      { title: 'Navigation: left', path: '/empty' },
      { title: 'Navigation: homepage', path: '/organisms/navigation-homepage' },
      { title: 'Embedded Analytical Designer', path: '/empty' },
      { title: 'Side-by-Side Comparison', path: '/organisms/side-by-side-comparison' },

      { title: 'Molecules', section: true, path: '/empty' },
      { title: 'KPI block', path: '/empty' },
      { title: 'BarChart', path: '/empty' },
      { title: 'ColumnChart', path: '/empty' },
      { title: 'LineChart', path: '/empty' },
      { title: 'Filter - Date', path: '/molecules/filter-date' },
      { title: 'Filter - Attribute', path: '/empty' },

      { title: 'Atoms', section: true, path: '/empty' },
      { title: 'Label', path: '/empty' },
      { title: 'Kpi', path: '/atoms/kpi' },
      { title: 'Legend', path: '/empty' },

      { title: 'Interactions', section: true, path: '/empty' },
      { title: 'Open in AD', path: '/empty' },
      { title: 'Visual filters', path: '/empty' },
      { title: 'Exporting', path: '/empty' },
      { title: 'Eventing', path: '/empty' },
    ];

    return (
      <div className="Navigation">
        <div className="LeftNavBlock">
          <input type="search" placeholder="Search…" onChange={this.search} />
        </div>
        <div className="LeftNavBlock">
          <ul className="ul">
            {
              menuItems
                .filter(menuItem =>
                  menuItem.title.toLowerCase().indexOf(searchString) !== -1)
                .map((menuItem) => {
                  const Tag = menuItem.path ? Link : 'span';
                  const props = {
                    to: menuItem.path,
                  };
                  const className = cx('MenuItem', {
                    Section: menuItem.section,
                    Child: !menuItem.section,
                    active: menuItem.path === hash && hash !== '/empty',
                  });

                  return (
                    <li>
                      <Tag className={className} {...props}>{menuItem.title}</Tag>
                    </li>
                  );
                })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
