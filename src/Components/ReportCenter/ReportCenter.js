import { useEffect } from 'react';
import './ReportCenter.css'

const ReportCenter = () => {
    useEffect(() => {
        const handleCollapse = (e) => {
          const btn = e.currentTarget;
          if (btn.parentNode.parentNode.classList.contains('open')) {
            btn.parentNode.parentNode.classList.remove('open');
          } else {
            btn.parentNode.parentNode.classList.add('open');
          }
        };
    
        const collapseTriggers = Array.from(document.getElementsByClassName('report-collapse-trigger'));
    
        collapseTriggers.forEach(item => {
          item.addEventListener('click', handleCollapse);
        });
    
        return () => {
          collapseTriggers.forEach(item => {
            item.removeEventListener('click', handleCollapse);
          });
        };
    }, []);

    return (
        <div className="report-container">
            <div className="report-content">
                <div className="report-header">
                    <h1 className="report-title">Report Center</h1>
                    <h3 className="report-name">Description/Name of the Report
                        <small className="report-period">All Dates</small>
                    </h3>
                </div>

                <div className="report-body">
                    <table>
                        <thead>
                            <tr>
                            <th style={{ width: '130px' }}>Date</th>
                            <th className="text-center">Transaction</th>
                            <th className="text-center" style={{ width: '100px' }}>Num</th>
                            <th className="text-center">Vendor</th>
                            <th>Description</th>
                            <th className="text-right" style={{ width: '100px' }}>Qty</th>
                            <th className="text-right" style={{ width: '100px' }}>Rate</th>
                            <th className="text-right" style={{ width: '100px' }}>Amount</th>
                            <th className="text-right" style={{ width: '100px' }}>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="tr-primary open">
                            <td colspan="9">
                            <p className="report-collapse-trigger">
                                <i className="fas fa-caret-right"></i>
                            </p>
                            Bonnet/hood</td>

                        </tr>
                        <tr className="tr-secondary">
                            <td>11/05/2018</td>
                            <td className="text-center">Inventory Starting Value</td>
                            <td className="text-center">START</td>
                            <td>&nbsp;</td>
                            <td>Bonnet/hood - Opening inventory</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">0.00</td>
                        </tr>

                        <tr className="tr-total">
                            <td colspan="5">Total for Bonnet/hood</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">$0.00</td>
                            <td className="text-right">0.00</td>
                        </tr>

                        <tr className="tr-primary open">
                            <td colspan="9">
                                <p className="report-collapse-trigger">
                                    <i className="fas fa-caret-right"></i>
                                </p>
                                Front Bumpber Bracket
                            </td>
                        </tr>

                        <tr className="tr-secondary">
                            <td>11/05/2018</td>
                            <td className="text-center">Inventory Starting Value</td>
                            <td className="text-center">START</td>
                            <td>&nbsp;</td>
                            <td>Bonnet/hood - Opening inventory</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">0.00</td>
                        </tr>
                        
                        <tr className="tr-total">
                            <td colspan="5">Total for Front Bumpber Bracket</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">$0.00</td>
                            <td className="text-right">0.00</td>
                        </tr>

                        
                            <tr className="tr-primary open">
                            <td colspan="9">
                            <p className="report-collapse-trigger">
                                <i className="fas fa-caret-right"></i>
                            </p>
                            Front Bumpber Bracket</td>

                        </tr>
                        <tr className="tr-secondary">
                            <td>11/05/2018</td>
                            <td className="text-center">Inventory Starting Value</td>
                            <td className="text-center">START</td>
                            <td>&nbsp;</td>

                            <td>Bonnet/hood - Opening inventory</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">0.00</td>

                        </tr>
                        
                                    <tr className="tr-total">
                            <td colspan="5">Total for Front Bumpber Bracket</td>

                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">$0.00</td>

                            <td className="text-right">0.00</td>

                        </tr>
                        
                            <tr className="tr-primary open" id="tr_2">
                            <td colspan="9">
                            <a className="report-collapse-trigger" href="#tr_2">
                                <i className="fas fa-caret-right"></i>
                            </a>
                            Front Bumpber Bracket</td>

                        </tr>
                        <tr className="tr-secondary">
                            <td>11/05/2018</td>
                            <td className="text-center">Inventory Starting Value</td>
                            <td className="text-center">START</td>
                            <td>&nbsp;</td>

                            <td>Bonnet/hood - Opening inventory</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">0.00</td>

                        </tr>
                        
                                    <tr className="tr-total">
                            <td colspan="5">Total for Front Bumpber Bracket</td>

                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">$0.00</td>

                            <td className="text-right">0.00</td>

                        </tr>
                        
                            <tr className="tr-primary open" id="tr_2">
                            <td colspan="9">
                            <a className="report-collapse-trigger" href="#tr_2">
                                <i className="fas fa-caret-right"></i>
                            </a>
                            Front Bumpber Bracket</td>

                        </tr>
                        <tr className="tr-secondary">
                            <td>11/05/2018</td>
                            <td className="text-center">Inventory Starting Value</td>
                            <td className="text-center">START</td>
                            <td>&nbsp;</td>

                            <td>Bonnet/hood - Opening inventory</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">0.00</td>
                            <td className="text-right">0.00</td>

                        </tr>
                        
                                    <tr className="tr-total">
                            <td colspan="5">Total for Front Bumpber Bracket</td>

                            <td className="text-right">0.00</td>
                            <td className="text-right">&nbsp;</td>
                            <td className="text-right">$0.00</td>

                            <td className="text-right">0.00</td>

                        </tr>

                        </tbody>
                        <tfoot>
                        <tr>
                            <th colspan="5" className="text-left">TOTAL</th>
                            <th className="text-right">0.00</th>
                                        <th className="text-right">&nbsp;</th>
                            <th className="text-right">$0.00</th>
                            <th className="text-right">&nbsp;</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                
                <div className="report-footer">
                    <div className="report-timestamp text-center">
                        Monday February 12, 2024 6:12pm IST
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ReportCenter